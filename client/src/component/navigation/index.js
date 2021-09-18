import style from "./style.module.css";
import tripSightLogo from "../../assets/images/tripsight-logo-oneline-white.png";
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Auth from '../../utils/auth'

const Navigation = () => {
  const background = window.location.pathname !== '/' ? style.backgroundHero : style.navContainer;
  const handleLogout = (event) => {
    event.preventDefault()
    Auth.logout()
  }
  const logButton = Auth.loggedIn() ? 
    <li><Link to="/" className={style.logout} onClick={handleLogout}>Logout</Link></li> :
   <li><Link to="/login">Login</Link></li>
  return (
    <div className={`${background}`}>
      <div className={style.navLogoContainer}>
        <Link to='/'><img id={style.sightLogo} src={tripSightLogo} /></Link>
      </div>
      <nav className={style.nav}>
        <ul>
          {Auth.loggedIn() ? <li><Link to="/dashboard">dashboard</Link></li> : null}
          {Auth.loggedIn() ? <li><Link to={`/profile/${Auth.getProfile().data._id}`}>Profile</Link></li> : null}
          {logButton}
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
