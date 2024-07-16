import "./SocialMedia.scss";
import {socialMediaLinks} from "../../arnavAggarwal";
import {SocialIcon} from "react-social-icons"

export default function socialMedia() {
  return (
    <div className="social-media-div">
      <SocialIcon network="linkedin" className="icon-button" href={socialMediaLinks.linkedin}/>
      <SocialIcon network="github" className="icon-button" href= {socialMediaLinks.github}/>
      <SocialIcon network="email" className="icon-button" href={`mailto:${socialMediaLinks.gmail}`}/>
     </div>
  );
}
