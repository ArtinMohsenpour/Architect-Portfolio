import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import * as ReactTooltip from "react-tooltip";
import { Tooltip } from "react-tooltip";
import { images } from "../../constants";
import { Tilt } from "react-tilt";

import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import "./Skills.scss";

const Skills = () => {
  const [experiences, setExperiences] = useState([]);
  const [skills, setSkills] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [desc, setDesc] = useState("");
  const [companyName, setCompanyName] = useState("");

  //
  const skillsArray = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "React",
    "redux",
    "hooks",
    "Rest APIs",
    "TypeScript",
    "Python",
    "JQUERY",
    "Next.js",
    "Three.js",
    "Git, GitHub",
    "Datatypes",
    "Bootstrap",
    "SASS",
    "Tailwind",
    "Figma",
    "Adobe XD",
    "UI",
  ];
  const softSkills = [
    "Responsive Design",
    "Communication",
    "E-Commerce",
    "Problem-Solving",
    "Team Collaboration",
    "Time Management",
    "Attention to Detail",
    "Accountability",
  ];
  //
  const toggleDes = (desc, workCompany) => {
    setDesc(desc);
    setIsOpen(!isOpen);
    setCompanyName(workCompany);
  };

  useEffect(() => {
    const query = '*[_type == "experiences"]';
    const skillsQuery = '*[_type == "skills"]';

    client.fetch(query).then((data) => {
      let array1 = [];
      [
        "Frontend Web Developer",
        "UI Design Internship",
        "Internship for bachelor degree",
        "Student Consultant",
      ].map((item) => {
        data.map((el) => {
          {
            el.works[0].name == item && array1.push(el);
          }
        });
      });

      setExperiences(array1);
    });

    client.fetch(skillsQuery).then((data) => {
      setSkills(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text">Skills & Experiences</h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <Tilt
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
                key={skill.name}
              >
                <img
                  key={skill.name + `${Math.random() * 100}`}
                  src={urlFor(skill.icon)}
                  alt={skill.name}
                />
              </Tilt>
              <p key={skill.name + `${Math.random() * 100}`} className="p-text">
                {skill.name}
              </p>
            </motion.div>
          ))}
        </motion.div>
        <div className="card__container">
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="card__container_card"
          >
            <h2>Skills</h2>
            {skillsArray.map((skill) => (
              <Tilt
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.8 }}
                key={skill}
                className="card__container_item"
              >
                <span key={skill} className="p-text">
                  {skill}
                </span>
              </Tilt>
            ))}
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="card__container_card"
          >
            <h2>Soft Skills</h2>

            {softSkills.map((skill) => (
              <Tilt
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.8 }}
                key={skill}
                className="card__container_item"
              >
                <span key={skill} className="p-text">
                  {skill}
                </span>
              </Tilt>
            ))}
          </motion.div>
        </div>
        <div className="app__skills-exp">
          {experiences?.map((experience) => (
            <div key={experience.year + `${Math.random() * 100}`}>
              <motion.div
                className="app__skills-exp-item"
                key={experience.year + `${Math.random() * 100}`}
              >
                <div className="app__skills-exp-year">
                  <p className="bold-text3" key={experience.year}>
                    {experience.year}
                  </p>
                </div>
                <motion.div className="app__skills-exp-works">
                  {experience?.works?.map((work) => (
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-work"
                      data-tip
                      data-for={work.name}
                      key={work.name + `${Math.random() * 100}`}
                    >
                      <h4 className="bold-text">{work.name}</h4>
                      <div
                        className="container__arrow"
                        onClick={() => toggleDes(work.desc, work.company)}
                      >
                        <p className="p-text">{work.company}</p>
                        <img
                          className={`arrow__down ${isOpen && "bg__arrow"}`}
                          src={images.arrowdown}
                          alt="arrow"
                        />
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
              {experience.works[0].company === companyName ? (
                <motion.div
                  whileInView={{ opacity: [0, 1] }}
                  transition={{ duration: 0.9 }}
                  data-tip
                  data-for={experience.year}
                  key={experience.year}
                  className={`${isOpen ? "" : "hidden"} p-text2`}
                >
                  <motion.div
                    whileInView={{ opacity: 1 }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5, type: "tween" }}
                    className="desc__container"
                  >
                    {desc}
                  </motion.div>
                </motion.div>
              ) : (
                ""
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, "app__skills"),
  "skills",
  "app__whitebg"
);
