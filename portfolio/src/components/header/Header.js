import { home_page } from "../../arnavAggarwal";
import "./Header.scss";
const Header = () => {
    return (
        <header className="header">
            <a href="/" className="logo">
                <span className="grey-color"> &lt;</span>
                <span className="logo-name">{home_page.name}</span>
                <span className="grey-color">/&gt;</span>
            </a>

            <ul className="menu">
                <li> 
                    <a href="#about">About Me</a>
                </li>

                <li>
                    <a href="#skills">Skills</a>
                </li>

                <li> 
                    <a href="#experience">Work Experiences</a>
                </li>

                <li>
                    <a href="#contact">Contact Me</a>
                </li>
            </ul>
            
        </header>
    )
}

export default Header;