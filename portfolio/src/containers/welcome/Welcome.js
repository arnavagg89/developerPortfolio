import React, {useContext} from "react";
import {Fade} from "react-awesome-reveal";
import "./Welcome.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import ThemeContext from "../../context/ThemeContext";

function Welcome() {
  const {isDark} = useContext(ThemeContext);

  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">

              <h1 className={isDark ? "dark-mode greeting-text" : "greeting-text"}>
                Hi, I Am Arnav
              </h1>

              <p className={isDark? "dark-mode greeting-text-p": "greeting-text-p subTitle"}>
                This Website is still under development, Give me a week's time! in the meantime, feel free to access my socials and take a look at my resume!
              </p>

              <SocialMedia />

              <div className="button-greeting-div">
                <Button text="Contact me" href="#contact" />
                
                <a
                    href={require("../../assets/Arnav_Aggarwal_Resume.pdf")}
                    download="Resume.pdf"
                    className="download-link-button"
                >
                    <Button text="Download my resume" />
                </a>
                </div>
          </div>
          <div className="greeting-image-div">
              <img
                alt="Photo of Me"
                src={require("../../assets/images/Arnav_Aggarwal.jpeg")}
              />
          </div>
        </div>
      </div>
    </Fade>
  );
}

export default Welcome;