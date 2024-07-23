import React from "react";
import Header from "../components/header/Header";
import Welcome from "./welcome/Welcome";
import About from "./about/About"
import Education from "./education/Education"
import Work from "./work/Work"
import Project from "./project/Project";
import {ThemeProvider} from "../context/ThemeContext"
import "./Main.scss";

const Main = () => {
  const [isDark, setIsDark] = React.useState(true)

  const changeTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={isDark ? "dark-mode" : null}>
      <ThemeProvider value={{isDark: isDark, changeTheme: changeTheme}}>
            <Header />
            <Welcome />
            <About/>
            <Education/>
            <Work/>
            <Project/>
      </ThemeProvider>
    </div>
  );
};

export default Main;
