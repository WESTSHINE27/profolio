import "./IntroSection.scss";
import PixelReveal from "./PixelReveal";
import pfp from "../../assets/imgs/pfp.png";
const IntroSection = () => {
  return (
    <div className="intro-section">
      <div className="intro-text-container">
        <span className="text">
          Hi, I'm Wei Siang — but you can also call me
          Sam.<br />
          I'm a Software Engineer passionate about crafting
          clean, user-friendly interfaces and turning ideas into functional web
          experiences.
          <br />
          Welcome to my portfolio!
        </span>
      </div>
      <div className="intro-pfp-container bbh-sans-bogle-regular ">
        <PixelReveal src={pfp} />
      </div>
    </div>
  );
};

export default IntroSection;
