import { useState } from "react";
import Navbar from "./Navbar";
import PropTypes from "prop-types";

export default function Header({ handleSnow, snow }) {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full h-20 flex items-center z-40 bg-gradient-to-b from-zinc-900 to-zinc-900/0">
      <div className="max-w-screen-2xl w-full mx-auto px-4 flex justify-between items-center md:px-6 md:grid md:grid-cols-[1fr,3fr,1fr]">
        <div className="flex gap-4 items-center">
          <a href="/" className="logo">
            <img width={60} height={60} src="logo.png" alt="Ilya Kurak" />
          </a>
          <div className="flex items-center justify-center gap-1">
            <label className="relative inline-block w-10 h-6 cursor-pointer">
              <input
                type="checkbox"
                className="absolute opacity-0 w-0 h-0"
                checked={snow}
                onChange={handleSnow}
              />
              <span
                className={`block w-full h-full  rounded-full transition-all duration-400 
              ${snow ? "bg-emerald-600" : "bg-gray-400"}`}
              >
                <span
                  className={`block w-4 h-4 bg-white rounded-full absolute bottom-1 left-1 transition-all duration-400 
              ${snow ? "translate-x-4" : ""}`}
                ></span>
              </span>
            </label>
            <p
              className={
                snow ? "text-slate-50 text-xl" : "text-slate-50/20 text-xl"
              }
            >
              ❄️
            </p>
          </div>
        </div>

        <div className="relative md:justify-self-center text">
          <button
            className="menu-btn md:hidden"
            onClick={() => setNavOpen((prev) => !prev)}
          >
            <span className="material-symbols-rounded">
              {navOpen ? "close" : "menu"}
            </span>
          </button>
          <Navbar navOpen={navOpen} />
        </div>

        <a
          href="#contact"
          className="btn btn-secondary px-4 rounded-xl max-md:hidden md:justify-self-end"
        >
          Связаться
        </a>
      </div>
    </header>
  );
}

Header.propTypes = {
  handleSnow: PropTypes.func.isRequired,
  snow: PropTypes.bool.isRequired,
};
