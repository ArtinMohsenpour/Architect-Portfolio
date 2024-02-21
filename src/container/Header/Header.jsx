import React from "react";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { AppWrap } from "../../wrapper";
import { images } from "../../constants";
import "./Header.scss";
import logo from "../../assets/logo2.png";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const Header = () => (
  <div className="app__header app__flex">
    <motion.div
      whileInView={{ x: [-120, 0], opacity: [0, 1] }}
      transition={{ duration: 0.9 }}
      className="app__header-info app__header-badge"
    >
      <Tilt className="badge-cmp app__flex">
        <div
          style={{ margin: 7, display: "flex", flexDirection: "column" }}
          className=""
        >
          <p
            style={{
              marginRight: 10,
              fontFamily: "Arial, sans-serif",
              fontSize: "28px",

              color: "#333",
            }}
            className="p-text"
          >
            My name is{" "}
          </p>
          <h1
            style={{
              fontFamily: "Georgia, serif",
            
              fontWeight: "bold",
              color: "#6b7688",
            }}
            className="p-text"
          >
            {" "}
            Mina Kherad
          </h1>
        </div>
      </Tilt>

      <Tilt className="box__container" style={{alignItems: "center"}}>
        <p
          style={{
            fontFamily: "Arial, sans-serif",
            fontSize: "23px",
            fontWeight: "normal",
            color: "#555",
          }}
          className="p-text"
        >
          Architect and Facade Engineer
        </p>
      </Tilt>
      <div className="badge-cmp">
        <img src={logo} />
      </div>
      <motion.div className="badge-cmp">
        <p
          style={{
            fontFamily: "Diastema, sans-serif",
            fontSize: "16px",
            fontWeight: "normal",
            color: "#777",
          }}
          className="header__text_p"
        >
          Bachelor. (Arch.), M.Eng. (Facade Design)
        </p>
        <p
          style={{
            fontFamily: "Lucy Rose, fantasy",
            fontSize: "16px",
            color: "#777",
          }}
          className="header__text_p"
        >
          32756 Detmold, NRW, Deutschland
        </p>
      </motion.div>
    </motion.div>

    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.5, delayChildren: 0.5 }}
      className="app__header-img"
    >
      <img className="image__blury " src={images.profile} alt="profile_bg" />

      {/* <motion.img
        whileInView={{ scale: [0, 1] }}
        transition={{ duration: 1, ease: "easeInOut" }}
        src={images.rect}
        alt="profile_circle"
        className="overlay_circle"
      /> */}
      <div className="blur__effect "></div>
    </motion.div>

    <motion.div
      variants={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className="app__header-circles box__container"
    >
      {[images.redux, images.react, images.sass].map((circle, index) => (
        <Tilt
          className="circle-cmp app__flex shadow__1"
          key={`circle-${index}`}
        >
          <img src={circle} alt="profile background" />
        </Tilt>
      ))}
    </motion.div>
  </div>
);

export default AppWrap(Header, "home");
