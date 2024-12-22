import { ReactLenis } from "lenis/react";

import Contact from "./components/Contact";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skill from "./components/Skill";
import Slider from "./components/Slider";
import About from "./components/About";
import Works from "./components/Works";
import Footer from "./components/footer";

export default function App() {
  return (
    <ReactLenis root>
      <Header />
      <main>
        <Hero />
        <About />
        <Skill />
        <Slider />
        <Works />
        <Contact />
        <Footer />
      </main>
    </ReactLenis>
  );
}
