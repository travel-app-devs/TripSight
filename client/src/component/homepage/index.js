import style from "./style.module.css";
import blogWriting from "../../assets/images/blogWriting.jpg";
import world from "../../assets/images/world.jpg";

const Homepage = () => {
  return (
    <div className={style.homepageContainer}>
      <div className={style.homepageSection}>
        <h2 className={style.homepageHeader}>Find reviews, experiences, recommendations...</h2>
        <p className={style.homepageInformation}>
          With Tripsight you can find these and more from people that have
          been to your next, or future, destination! Just search for your place of choice! If you want to post your own experiences, reviews, or recommendations, just sign up or log in. It's that easy!
        </p>
        <img id={style.blogWritingImage}src={world} />
      </div>
      <div className={style.homepageSectionTwo}>
        <h2 className={style.homepageHeaderTwo}>Ready for your next adventure? Get started at TripSight today!</h2>
      </div>
    </div>
  );
};

export default Homepage;
