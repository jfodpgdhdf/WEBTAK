<?php
// Contact form handler for ai.webtak.de.
// Receives JSON or form-encoded POSTs from /contact.php and emails marvin@webtak.de.
// Will be replaced by a CRM webhook in WEB-6.

header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false, 'error' => 'Method not allowed']);
    exit;
}

$rawBody = file_get_contents('php://input');
$data = [];
$contentType = isset($_SERVER['CONTENT_TYPE']) ? $_SERVER['CONTENT_TYPE'] : '';
if (stripos($contentType, 'application/json') !== false) {
    $decoded = json_decode($rawBody, true);
    if (is_array($decoded)) {
        $data = $decoded;
    }
} else {
    $data = $_POST;
}

$honeypot = isset($data['website']) ? trim((string) $data['website']) : '';
if ($honeypot !== '') {
    http_response_code(200);
    echo json_encode(['ok' => true]);
    exit;
}

$name = isset($data['name']) ? trim((string) $data['name']) : '';
$email = isset($data['email']) ? trim((string) $data['email']) : '';
$company = isset($data['company']) ? trim((string) $data['company']) : '';
$message = isset($data['message']) ? trim((string) $data['message']) : '';

if ($name === '' || $email === '' || $message === '') {
    http_response_code(400);
    echo json_encode(['ok' => false, 'error' => 'Missing required field']);
    exit;
}
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['ok' => false, 'error' => 'Invalid email']);
    exit;
}
foreach ([$name, $email, $company] as $line) {
    if (preg_match("/[\r\n]/", $line)) {
        http_response_code(400);
        echo json_encode(['ok' => false, 'error' => 'Invalid characters']);
        exit;
    }
}

$to = 'marvin@webtak.de';
$subject = '[webtak.ai] New lead: ' . substr($name, 0, 80);
$bodyLines = [
    'New contact form submission from ai.webtak.de',
    '',
    'Name:    ' . $name,
    'Email:   ' . $email,
    'Company: ' . ($company !== '' ? $company : '—'),
    '',
    'Message:',
    $message,
    '',
    '---',
    'Submitted: ' . gmdate('c'),
    'IP:        ' . (isset($_SERVER['REMOTE_ADDR']) ? $_SERVER['REMOTE_ADDR'] : '—'),
];
$body = implode("\n", $bodyLines);

$fromDomain = isset($_SERVER['SERVER_NAME']) ? $_SERVER['SERVER_NAME'] : 'webtak.de';
$headers = [
    'From: Webtak AI <noreply@' . $fromDomain . '>',
    'Reply-To: ' . $name . ' <' . $email . '>',
    'Content-Type: text/plain; charset=utf-8',
    'X-Mailer: webtak-contact',
];

$sent = @mail($to, $subject, $body, implode("\r\n", $headers));

if (!$sent) {
    http_response_code(502);
    echo json_encode(['ok' => false, 'error' => 'Mail send failed']);
    exit;
}

echo json_encode(['ok' => true]);
