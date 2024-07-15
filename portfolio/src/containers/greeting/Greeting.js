import { home_page, info_page } from "../../arnavAggarwal";
import "./Greeting.scss"
const Greeting = () => {
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
                    {/* Insert social media bar here */}
                    <div className="button-div">
                        {/* <Button text = "Contact Me" href = "#contact"/> */}
                        
                        <a
                            // href={require("./resume.pdf")}
                            // download="Resume.pdf"
                            className="download-button"
                        >
                            {/* <Button text="Download my resume" /> */}
                        </a>
                        
                    </div>

                </div>

                <div className="home-image">
                    {/* Insert photo over here */}
                </div>
            </div>
        </div>
    )
}

export default Greeting;