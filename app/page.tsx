import { Hero } from "./components/hero";
import { Services } from "./components/services";
import { Demo } from "./components/demo";
import { Contact } from "./components/contact";
import { Footer } from "./components/footer";
import { Nav } from "./components/nav";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Services />
        <Demo />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
