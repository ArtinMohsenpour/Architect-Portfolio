import React from "react";
import { BsInstagram } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a
        href="https://www.instagram.com/artin_mohsenpour/"
        target="blank"
        name="social media"
        aria-label="Instagram"
      >
        <BsInstagram />
      </a>
    </div>
    <div>
      <a
        href="https://www.linkedin.com/in/artin-mohsenpour/"
        target="blank"
        name="social media"
        aria-label="Linkedin"
      >
        <FaLinkedin />
      </a>
    </div>
    <div>
      <a
        href="https://github.com/ArtinMohsenpour"
        target="blank"
        name="social media"
        aria-label="Github"
      >
        <FaGithub />
      </a>
    </div>
  </div>
);

export default SocialMedia;
