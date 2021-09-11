import style from "./style.module.css";
import hero from "../../assets/images/hero-image.png";

const Hero = () => {
  return (
    <div className={style.heroContainer}>
      <img src={hero} alt="Header Image" />
      <div className={style.heroTextContainer}>
          <div>
              <h1 className={style.heroTextBigHeader}>TravelSight</h1>
          </div>
          <div>
              <p>Find travel recommendations from real people that have been there previously!</p>
          </div>
      </div>
    </div>
  );
};

export default Hero;
