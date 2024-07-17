import React, {useContext} from "react";
import "./Project.scss";
// import {bigProjects} from "../../portfolio";
import {Fade} from "react-awesome-reveal";
import ThemeContext from "../../context/ThemeContext";
import { SocialIcon } from "react-social-icons";
import SudokuImage from "../../assets/images/Sudoku.png"

function Project() {


  const {isDark} = useContext(ThemeContext);
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="projects">
        <h1 className="skills-heading">Projects</h1>

        <div className="projects-container">
          <div className={ isDark? "dark-mode project-card project-card-dark": "project-card project-card-light"}>
            <div className="project-image">
              <img src = {SudokuImage} className="card-image"/>
            
            </div>

            <div className="project-text">
              <h2 className={isDark ? "dark-mode card-title" : "project-title"}>
                Sudoku Solver
              </h2>
              <p className={isDark ? "dark-mode card-subtitle" : "project-desc"}>
                project desc project desc project descproject desc project desc project desc project desc project desc project desc project desc project desc project desc v project desc v v
              </p>
              <SocialIcon network="github" url="https://github.com/arnavagg89"/>
            </div>
          </div>
          <div className={ isDark? "dark-mode project-card project-card-dark": "project-card project-card-light"}>
            <div className="project-image">
              <img src = {SudokuImage} className="card-image"/>
            
            </div>

            <div className="project-text">
              <h2 className={isDark ? "dark-mode card-title" : "project-title"}>
                Sudoku Solver
              </h2>
              <p className={isDark ? "dark-mode card-subtitle" : "project-desc"}>
                project desc project desc project descproject desc project desc project desc project desc project desc project desc project desc project desc project desc v project desc v v
              </p>
              <SocialIcon network="github" url="https://github.com/arnavagg89"/>
            </div>
          </div>
          <div className={ isDark? "dark-mode project-card project-card-dark": "project-card project-card-light"}>
            <div className="project-image">
              <img src = {SudokuImage} className="card-image"/>
            
            </div>

            <div className="project-text">
              <h2 className={isDark ? "dark-mode card-title" : "project-title"}>
                Sudoku Solver
              </h2>
              <p className={isDark ? "dark-mode card-subtitle" : "project-desc"}>
                project desc project desc project descproject desc project desc project desc project desc project desc project desc project desc project desc project desc v project desc v v
              </p>
              <SocialIcon network="github" url="https://github.com/arnavagg89"/>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
}

export default Project;