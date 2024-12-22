import { useEffect, useRef } from "react";
import PropTypes from "prop-types";

export default function Navbar({ navOpen }) {
  const lastActiveLink = useRef();
  const activeBox = useRef();

  const updateActiveBox = () => {
    if (activeBox.current && lastActiveLink.current) {
      activeBox.current.style.top = lastActiveLink.current.offsetTop + "px";
      activeBox.current.style.left = lastActiveLink.current.offsetLeft + "px";
      activeBox.current.style.width = lastActiveLink.current.offsetWidth + "px";
      activeBox.current.style.height =
        lastActiveLink.current.offsetHeight + "px";
    }
  };

  useEffect(() => {
    updateActiveBox();
    window.addEventListener("resize", updateActiveBox);

    return () => {
      window.removeEventListener("resize", updateActiveBox);
    };
  }, []);

  const activeCurrentLink = (event) => {
    lastActiveLink.current?.classList.remove("active");
    event.target.classList.add("active");
    lastActiveLink.current = event.target;

    updateActiveBox();
  };

  const navItems = [
    {
      label: "Главная",
      link: "#home",
      className: "nav-link active",
      ref: lastActiveLink,
    },
    {
      label: "Обо мне",
      link: "#about",
      className: "nav-link",
    },
    {
      label: "Работы",
      link: "#work",
      className: "nav-link",
    },
    {
      label: "Контакты",
      link: "#contact",
      className: "nav-link md:hidden",
    },
  ];

  return (
    <nav className={"navbar " + (navOpen ? "active" : "")}>
      {navItems.map(({ label, link, className, ref }, key) => (
        <a
          href={link}
          className={className}
          key={key}
          ref={ref}
          onClick={activeCurrentLink}
        >
          {label}
        </a>
      ))}
      <div className="active-box" ref={activeBox}></div>
    </nav>
  );
}

Navbar.propTypes = {
  navOpen: PropTypes.bool.isRequired,
};
