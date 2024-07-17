import React, {useEffect, useState} from "react";
import Header from "../components/header/Header";
import Welcome from "./welcome/Welcome";
import About from "./about/About"
import Education from "./education/Education"
import Work from "./work/Work"
import {ThemeProvider} from "../context/ThemeContext"
import "./Main.scss";

const Main = () => {
  const [isDark, setIsDark] = useState(false)

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
            {/* 
            <WorkExperience />
            <Projects />
            <StartupProject />
            <Achievement />
            <Profile />
            <Footer />
            <ScrollToTopButton /> */}
      </ThemeProvider>
    </div>
  );
};

export default Main;
