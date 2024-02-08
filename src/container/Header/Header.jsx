import React from "react";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { AppWrap } from "../../wrapper";
import { images } from "../../constants";
import "./Header.scss";

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
    {/* <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className="app__header-info app__header-badge"
    >
      <Tilt>
        <div className="app__header-badge">
          <Tilt>
            <div className="badge-cmp app__flex">
              <span>
                <img
                  className="logo__container"
                  src={images.hello}
                  alt="profile_bg"
                />
              </span>
              <div style={{ marginLeft: 20 }}>
                <p className="p-text">My name is</p>
                <h1 className="head-text">Abolfazl</h1>
              </div>
            </div>
          </Tilt>
          <Tilt>
            <div className="tag-cmp app__flex ">
              <p className="p-text">Frontend Web Developer</p>

              <p className="p-text">UI designer</p>
            </div>
          </Tilt>
        </div>
      </Tilt>
    </motion.div> */}
    <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className="app__header-info"
    >
      <Tilt className="app__header-badge">
        <Tilt className="badge-cmp app__flex">
          <span><img
                  className="logo__container"
                  src={images.hello}
                  alt="profile_bg"
                /></span>
          <div style={{ marginLeft: 20 }}>
            <p className="p-text">My name is</p>
            <h1 className="head-text">Abolfazl</h1>
          </div>
        </Tilt>

        <Tilt className="tag-cmp app__flex ">
          <p className="p-text">Frontend Web Developer</p>

          <p className="p-text">UI designer</p>
        </Tilt>
      </Tilt>
    </motion.div>

    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.5, delayChildren: 0.5 }}
      className="app__header-img"
    >
      <img className="image__blury" src={images.profile} alt="profile_bg" />
      <motion.img
        whileInView={{ scale: [0, 1] }}
        transition={{ duration: 1, ease: "easeInOut" }}
        src={images.circle}
        alt="profile_circle"
        className="overlay_circle"
      />
      <div className="blur__effect"></div>
    </motion.div>

    <motion.div
      variants={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className="app__header-circles"
    >
      {[images.redux, images.react, images.sass].map((circle, index) => (
        <Tilt className="circle-cmp app__flex" key={`circle-${index}`}>
          <img src={circle} alt="profile_bg" />
        </Tilt>
      ))}
    </motion.div>
  </div>
);

export default AppWrap(Header, "home");
