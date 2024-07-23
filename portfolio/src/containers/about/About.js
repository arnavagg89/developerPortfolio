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
              Hi and welcome to my portfolio. I am a final year student at the university of waterloo and specialize in Software Engineering and Artificial Intelligence. 
              I entered this field because of my ever growing curiosity around technology and innovation. 
              <br/>
              Software engineering gives me the power to contribute to the rapid innovation and build stuff that can make a difference in people's lives. I find development to be a way to embody one's thoughts and ideas into a practical creation which is a testimony to all the experiences envolved in manufacturing the result. 
              <br/>
              In addition, I have long seen Artificial Intelligence as the future companion of mankind long before chatgpt became a part of it. I keep in touch with the advances in AI and focus on doing my part in it. I deeply care about the future of AI and its safety along with envisioning the enormous possibilities that surround it.  
            </p>
          </div>
        </Fade>
      </div>
    </div>
  );
}

export default About;