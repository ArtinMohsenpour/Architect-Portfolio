import React, { useState } from "react";
import { images } from "../../constants/index";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import "./Navbar.scss";
//

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <a href="#home">
          <img src={images.logo} alt="logo" />
        </a>
        <p className="p-text">Portfolio</p>
      </div>
      <ul className="app__navbar-links">
        <div className="app__flex link__container">
          {["home", "about", "work", "skills", "contact"].map((item) => {
            return (
              <li className="app__flex p-text" key={`link-${item}`}>
                <div />
                <a href={`#${item}`}>{item}</a>
              </li>
            );
          })}
        </div>
      </ul>

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(!toggle)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [150, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <HiX onClick={() => setToggle(!toggle)} cursor="pointer" />
            <ul className="app__navbar-links">
              {["home", "about", "work", "skills", "contact"].map((item) => {
                return (
                  <li key={`${item}`}>
                    <a href={`#${item}`} onClick={() => setToggle(!toggle)}>
                      {item}
                    </a>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
