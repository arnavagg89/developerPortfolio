// import Header from "../components/header/Header"
// import Home from "./home/Home";
// import Education from "./education/Education";
// // import { ThemeProvider } from "../context/ThemeContext";
// import { useState } from "react";
// const Main = () => {

//     const [isDark, setIsDark] = useState(false);

//     const changeTheme = () => {
//         setIsDark(!isDark);
//     };

//     return (
//         <div>
//             {/* <ThemeProvider value = {{isDark: isDark, changeTheme: changeTheme}}> */}
//                 <Header/>
//                 <Home/>
//                 <Education/>
//             {/* </ThemeProvider> */}
            
//         </div>
//     )
// }

// export default Main;
import React, {useEffect, useState} from "react";
import Header from "../components/header/Header";
import Welcome from "./welcome/Welcome";
// import Skills from "./skills/Skills";
// import StackProgress from "./skillProgress/skillProgress";
// import WorkExperience from "./workExperience/WorkExperience";
// import Projects from "./projects/Projects";
// import StartupProject from "./StartupProjects/StartupProject";
// import Achievement from "./achievement/Achievement";
// import Blogs from "./blogs/Blogs";
// import Footer from "../components/footer/Footer";
// import Talks from "./talks/Talks";
// import Podcast from "./podcast/Podcast";
// import Education from "./education/Education";
// import ScrollToTopButton from "./topbutton/Top";
// import Twitter from "./twitter-embed/twitter";
// import Profile from "./profile/Profile";
// import SplashScreen from "./splashScreen/SplashScreen";
// import {splashScreen} from "../portfolio";
import {ThemeProvider} from "../context/ThemeContext"
// import {useLocalStorage} from "../hooks/useLocalStorage";
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
            {/* <Skills />
            <StackProgress />
            <Education />
            <WorkExperience />
            <Projects />
            <StartupProject />
            <Achievement />
            <Blogs />
            <Talks />
            <Twitter />
            <Podcast />
            <Profile />
            <Footer />
            <ScrollToTopButton /> */}
      </ThemeProvider>
    </div>
  );
};

export default Main;
