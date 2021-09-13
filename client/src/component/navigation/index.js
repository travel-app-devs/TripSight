import style from "./style.module.css";
import tripSightLogo from "../../assets/images/tripsight-logo-oneline-white.png";
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

const Navigation = () => {
  return (
    <div className={style.navContainer}>
      <div className={style.navLogoContainer}>
        <img id={style.sightLogo} src={tripSightLogo} />
      </div>
      <nav className={style.nav}>
        <ul>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
