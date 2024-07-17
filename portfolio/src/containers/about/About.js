import React, {useContext} from "react";
import "./About.scss";
import {Fade} from "react-awesome-reveal";
import Lottie from "lottie-react"
import animationData from "../../assets/Working_man.json"
import ThemeContext from "../../context/ThemeContext";

function About() {
  const {isDark} = useContext(ThemeContext);

  return (
    <div className={isDark ? "dark-mode main" : "main"} id="about">
      <div className="skills-main-div">
        <Fade left duration={1000}>
          <div className="skills-image-div">
            <Lottie animationData={animationData}/>
          </div>
        </Fade>
        <Fade right duration={1000}>
          <div className="skills-text-div">
            <h1 className={isDark ? "dark-mode skills-heading" : "skills-heading"}>
              About Me
            </h1>
            <p className={isDark? "dark-mode subTitle skills-text-subtitle": "subTitle skills-text-subtitle"}>
              Insert About Me
            </p>
          </div>
        </Fade>
      </div>
    </div>
  );
}

export default About;