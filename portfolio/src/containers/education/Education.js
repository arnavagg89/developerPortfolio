// import "./Education.scss"
// import { universityDetails } from "../../arnavAggarwal";
// import {Fade, Slide} from "react-awesome-reveal";
// import uwaterloo_logo from "../../assets/images/uwaterloo.png"

// function Education() {
//     return (
//         <div className="education-section" id="education">
//             <h1 className="education-heading"> Education</h1>
//             <Fade left duration = {1000}>
//             <div className="education-card">
//                 <div className="education-card-left">
//                     <img src ={uwaterloo_logo}></img>
//                 </div>
//                 <div className="education-card-right">
//                     <h5 className="education-text-school">{universityDetails.name}</h5>
//                     <div className="education-details-text">
//                         <h5 className="education-text-subheader">
//                             {universityDetails.degree}
//                         </h5>

//                         <p className="education-text-duration">
//                             {universityDetails.startDate} - {universityDetails.endDate}
//                         </p>
//                         <ul>
//                             <li>
//                                 {universityDetails.bulletPoint1}
//                             </li>
//                             <li>
//                                 {universityDetails.bulletPoint2}
//                             </li>
//                             <li>
//                                 {universityDetails.bulletPoint3}
//                             </li>
//                         </ul>
//                     </div>
//                 </div>
//             </div>
//             </Fade>
//             <Slide left duration={2000}>
//                 <div className="education-card-border"></div>
//             </Slide>
//         </div>
//     )
// }

// export default Education;
import React, { useContext } from "react";
import "./Education.scss";
import ThemeContext from "../../context/ThemeContext";
import { Fade, Slide } from "react-awesome-reveal";
import uwaterlooLogo from "../../assets/images/uwaterloo.png"

export default function Education() {

    const isDark = useContext(ThemeContext);

    return (
      <div className="education-section" id="education">
        <h1 className="education-heading">Education</h1>

        <div className="education-card-container">
            <Fade left duration={1000}>
                <div className="education-card">
    
                    <div className="education-card-left">
                        <img
                            className="education-roundedimg"
                            src={uwaterlooLogo}
                            alt="Univesity Of Waterloo"
                        />
                    </div>
                    
                    <div className="education-card-right">
                        <h5 className="education-text-school">University Of Waterloo</h5>

                        <div className="education-text-details">
                            <h5 className={isDark? "dark-mode education-text-subHeader" : "education-text-subHeader"}>
                                Bachelor Of Computer Science, Specialization in Artifical Intelligence
                            </h5>

                            <p className={isDark ? "dark-mode education-text-duration" : "education-text-duration"}>
                                September 2020 - April 2025 (Expected)
                            </p>
            
                            <div className="education-text-bullets">
                                <ul>
                                <li>Completed Advanced Coursework on Data Stuctures and Algorithms, Operating System, Machine Learning, Artificial Intelligence, Computer Vision with an overall CGPA of 3.7/4</li>
                                <li>Part of UW Data Science club, Computer Science Club along with being a part of multiple hackathons</li>
                                <li>Completed 5 full coops terms with 4 excellent and 1 outstanding rating</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </Fade>
            <Slide left duration={2000}>
                <div className="education-card-border"></div>
            </Slide>
        </div>
      </div>
    );
}
