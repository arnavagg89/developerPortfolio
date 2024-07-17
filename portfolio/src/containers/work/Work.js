import React, {useContext} from "react";
import "./Work.scss";
import {Fade} from "react-awesome-reveal";
import ThemeContext from "../../context/ThemeContext";
import kpmgLogo from "../../assets/images/KPMG.png"

function Work() {
    const {isDark} = useContext(ThemeContext);

    return (
      <div id="experience">
        <Fade bottom duration={1000} distance="20px">
            <div className="experience-container">
                
                <h1 className="experience-heading"> 
                    Experiences 
                </h1>

                <div className={(isDark ? "dark " : "") + "experience-card"}>
                    <div className="company-div-left"> 
                        <h2 className="company-name"> KPMG</h2>
                        <p className="company-info">Toronto, ON, CA</p>
                        <p className="company-info">September 2020 - August 2024</p>
                    </div>
                    <div className="company-div-right">
                        <h5 className="company-position">Software Engineering Intern</h5>
                        <p className="company-desc">Insert a big para for KPMG here.Insert a big para for KPMG here.Insert a big para for KPMG here.Insert a big para for KPMG here.Insert a big para for KPMG hereInsert a big para for KPMG herev.Insert a big para for KPMG here</p>
                    </div>
                </div>

                <div className={(isDark ? "dark " : "") + "experience-card"}>
                    <div className="company-div-left"> 
                        <h2 className="company-name"> KPMG</h2>
                        <p className="company-info">Toronto, ON, CA</p>
                        <p className="company-info">September 2020 - August 2024</p>
                    </div>
                    <div className="company-div-right">
                        <h5 className="company-position">Software Engineering Intern</h5>
                        <p className="company-desc">Insert a big para for KPMG here.Insert a big para for KPMG here.Insert a big para for KPMG here.Insert a big para for KPMG here.Insert a big para for KPMG hereInsert a big para for KPMG herev.Insert a big para for KPMG here</p>
                    </div>
                </div>

                <div className={(isDark ? "dark " : "") + "experience-card"}>
                    <div className="company-div-left"> 
                        <h2 className="company-name"> KPMG</h2>
                        <p className="company-info">Toronto, ON, CA</p>
                        <p className="company-info">September 2020 - August 2024</p>
                    </div>
                    <div className="company-div-right">
                        <h5 className="company-position">Software Engineering Intern</h5>
                        <p className="company-desc">Insert a big para for KPMG here.Insert a big para for KPMG here.Insert a big para for KPMG here.Insert a big para for KPMG here.Insert a big para for KPMG hereInsert a big para for KPMG herev.Insert a big para for KPMG here</p>
                    </div>
                </div>
            </div>
        </Fade>
      </div>
    );
  }
export default Work;
