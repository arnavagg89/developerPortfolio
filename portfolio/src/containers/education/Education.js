import "./Education.scss"
import { universityDetails } from "../../arnavAggarwal";
// import {Fade, Slide} from "react-reveal";
import uwaterloo_logo from "../../assets/images/uwaterloo.png"

function Education() {
    return (
        <div className="education-section" id="education">
            <h1 className="education-heading"> Education</h1>
            {/* <Fade left duration = {1000}> */}
            <div className="education-card">
                <div className="education-card-left">
                    <img src ={uwaterloo_logo}></img>
                </div>
                <div className="education-card-right">
                    <h5 className="education-text-school">{universityDetails.name}</h5>
                    <div className="education-details-text">
                        <h5 className="education-text-subheader">
                            {universityDetails.degree}
                        </h5>

                        <p className="education-text-duration">
                            {universityDetails.startDate} - {universityDetails.endDate}
                        </p>
                        <ul>
                            <li>
                                {universityDetails.bulletPoint1}
                            </li>
                            <li>
                                {universityDetails.bulletPoint2}
                            </li>
                            <li>
                                {universityDetails.bulletPoint3}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* </Fade> */}
        </div>
    )
}

export default Education;