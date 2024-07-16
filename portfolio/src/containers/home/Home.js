import { home_page } from "../../arnavAggarwal";
import Button from "../../components/button/Button";
import SocialMedia from "../../components/socialMedia/SocialMedia";
// import uwaterloo from "./uwaterloo.png"
import "./Home.scss"
const Home = () => {
    return (
        <div className="home-main" id="home">
            <div className="home-submain">
                <div className="home-text-div"> 
                    <h1 className="homeTitle">
                        {home_page.title}      
                    </h1>
                    <p className="home-text-p subTitle"> 
                        {home_page.description}
                    </p>
                    <SocialMedia/>
                    <div className="button-div">
                        <Button text = "Contact Me" href = "#contact"/>
                        
                        <a
                            // href={require("./resume.pdf")}
                            // download="Resume.pdf"
                            className="button-resume"
                        >
                            <Button text="Download my resume" />
                        </a>
                        
                    </div>

                </div>

                <div className="home-image">
                    {/* <img src={uwaterloo}/> */}
                    {/* Insert photo over here */}
                </div>
            </div>
        </div>
    )
}

export default Home;