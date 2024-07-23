import React, {useContext} from "react";
import "./Work.scss";
import {Fade} from "react-awesome-reveal";
import ThemeContext from "../../context/ThemeContext";

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
                        <p className="company-info">September 2023 - May 2024</p>
                    </div>
                    <div className="company-div-right">
                        <h2 className="company-position">Software Engineering Intern</h2>
                        <p className="company-desc">Insert a big para for KPMG here.Insert a big para for KPMG here.Insert a big para for KPMG here.Insert a big para for KPMG here.Insert a big para for KPMG hereInsert a big para for KPMG herev.Insert a big para for KPMG here</p>
                    </div>
                </div>

                <div className={(isDark ? "dark " : "") + "experience-card"}>
                    <div className="company-div-left"> 
                        <h2 className="company-name"> Jana Corporation</h2>
                        <p className="company-info">Aurora, ON, CA</p>
                        <p className="company-info">September 2022 - December 2022</p>
                    </div>
                    <div className="company-div-right">
                        <h2 className="company-position">Data Science Intern</h2>
                        <p className="company-desc">Insert a big para for KPMG here.Insert a big para for KPMG here.Insert a big para for KPMG here.Insert a big para for KPMG here.Insert a big para for KPMG hereInsert a big para for KPMG herev.Insert a big para for KPMG here</p>
                    </div>
                </div>

                <div className={(isDark ? "dark " : "") + "experience-card"}>
                    <div className="company-div-left"> 
                        <h2 className="company-name"> Cineplex</h2>
                        <p className="company-info">Toronto, ON, CA</p>
                        <p className="company-info">January 2022 - April 2022</p>
                    </div>
                    <div className="company-div-right">
                        <h2 className="company-position">Software Developer Intern</h2>
                        <p className="company-desc">Insert a big para for KPMG here.Insert a big para for KPMG here.Insert a big para for KPMG here.Insert a big para for KPMG here.Insert a big para for KPMG hereInsert a big para for KPMG herev.Insert a big para for KPMG here</p>
                    </div>
                </div>

                <div className={(isDark ? "dark " : "") + "experience-card"}>
                    <div className="company-div-left"> 
                        <h2 className="company-name"> AltaMl and Microsoft <br/>(We Accelerate)</h2>
                        <p className="company-info">Toronto, ON, CA</p>
                        <p className="company-info">May 2021 - August 2021</p>
                    </div>
                    <div className="company-div-right">
                        <h2 className="company-position">ML Project Intern</h2>
                        <p className="company-desc">Insert a big para for KPMG here.Insert a big para for KPMG here.Insert a big para for KPMG here.Insert a big para for KPMG here.Insert a big para for KPMG hereInsert a big para for KPMG herev.Insert a big para for KPMG here</p>
                    </div>
                </div>
            </div>
        </Fade>
      </div>
    );
  }
export default Work;
