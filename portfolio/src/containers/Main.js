import Header from "../components/header/Header"
import Home from "./home/Home";
import Education from "./education/Education";
// import { ThemeProvider } from "../context/ThemeContext";
import { useState } from "react";
const Main = () => {

    const [isDark, setIsDark] = useState(false);

    const changeTheme = () => {
        setIsDark(!isDark);
    };

    return (
        <div>
            {/* <ThemeProvider value = {{isDark: isDark, changeTheme: changeTheme}}> */}
                <Header/>
                <Home/>
                <Education/>
            {/* </ThemeProvider> */}
            
        </div>
    )
}

export default Main;