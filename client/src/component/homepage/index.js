import style from "./style.module.css";
import blogWriting from "../../assets/images/blogWriting.jpg";
import world from "../../assets/images/world.jpg";

const Homepage = () => {
  return (
    <div className={style.homepageContainer}>
      <div className={style.homepageSection}>
        <h2 className={style.homepageHeader}>Find the best recommendation here</h2>
        <p className={style.homepageInformation}>
          With Tripsight you can find recommendations from people that have
          been there before you! You will know which places to visit while your
          there and priotize your time.
        </p>
        <img id={style.blogWritingImage}src={world} />
      </div>
      <div className={style.homepageSectionTwo}>
        <h2 className={style.homepageHeaderTwo}>Ready for your next adventure? Start looking at our collection of travel blogs today!</h2>
      </div>
    </div>
  );
};

export default Homepage;
