import { ReactLenis } from "lenis/react";
import Snowfall from "react-snowfall";

import Contact from "./components/Contact";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skill from "./components/Skill";
import Slider from "./components/Slider";
import About from "./components/About";
import Works from "./components/Works";
import Footer from "./components/Footer";
import { useState } from "react";

export default function App() {
  const [toggleSnow, setToggleSnow] = useState(false);

  function handleToggleSnow() {
    setToggleSnow((prev) => !prev);
  }

  return (
    <ReactLenis root>
      {/* Snowfall component будет в самом верху и будет покрывать весь экран */}
      {toggleSnow && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: -1,
          }}
        >
          <Snowfall />
        </div>
      )}

      <Header snow={toggleSnow} handleSnow={handleToggleSnow} />
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
