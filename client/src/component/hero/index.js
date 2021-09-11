import style from "./style.module.css";
//import hero from "../../assets/images/hero-image.png";

const Hero = () => {
  return (
    <div className={style.heroContainer}>
      <div className={style.heroTextContainer}>
          <div className={style.heroTextSection}>
              <h1 className={style.heroTextBigHeader}>TripSight</h1>
          <div className={style.heroDescriptionContainer}>
              <p className={style.heroTextDescription}>Find travel recommendations from real people that have been there previously!</p>
          </div>
          <div className={style.heroForm}>
              <input id={style.heroSearchForm} type="text" />
              <input id={style.heroSearchButton} type="submit" value="Search"/>
          </div>
          </div>
      </div>
    </div>
  );
};

export default Hero;
