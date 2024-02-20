import React, { useState, useEffect } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import leftArrow from "../../assets/left-arrow.png";
import rightArrow from "../../assets/right-arrow.png";

import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import "./Work.scss";

const Work = () => {
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");
  //const [sorted, setSorted] = useState(false);
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  useEffect(() => {
    const query = '*[_type == "works"]';

    client.fetch(query).then((data) => {
      const array1 = data.filter((work) => work.tags.includes("React"));
      const array2 = [...array1, ...data].filter(
        (item, index, self) => self.indexOf(item) === index
      );

      setWorks(data);
      setFilterWork(data);
      console.log(data);
    });
  }, []);

  //
  const handleWorkFilter = (item) => {
    // setSorted(true);
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);
      console.log(item);
      if (item === "All") {
        setFilterWork(works);
      } else {
        setFilterWork(
          works.filter((work) => {
            return work.tags.includes(item);
          })
        );
      }
    }, 500);
  };

  return (
    <>
      <h2 className="head-text ">
        My Creative <span className="scroll__rotate">Project</span> Section
      </h2>

      <div className="app__work-filter">
        {["Architectural", "Facade", "All"].map((item, index) => (
          <div
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={`app__work-filter-item app__flex p-text shadow__2 ${
              activeFilter === item ? "item-active" : ""
            }`}
          >
            {item}
          </div>
        ))}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {filterWork.map((work, index) => (
          <div className="app__work-item app__flex" key={index}>
            <div className="app__work-img app__flex">
              <img
                src={urlFor(work.imgUrl1)}
                alt={`${work.name ? work.name : "image-work"}`}
              />
              <button className="swipper__left_button">
                <img src={leftArrow} />
              </button>
              <button className="swipper__right_button">
                <img src={rightArrow} />
              </button>
            </div>

            <div className="app__work-content app__flex">
              <h4 className="bold-text2">{work.title}</h4>
              <p className="p-text2" style={{ marginTop: 10 }}>
                {work.description}
              </p>

              <div className="app__work-tag app__flex">
                <p className="p-text">{work.tags[0]}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Work, "app__works"),
  "work",
  "app__primarybg"
);
