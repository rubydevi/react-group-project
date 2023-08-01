import { NavLink } from 'react-router-dom';
import logo from '../images/planet.png';

const Navigation = () => (
  <div>
    <ul className="menu">
      <li className="logo">
        <img src={logo} alt="logo" />
        <h3>Space Travelers&apos; Hub</h3>
      </li>
      <li>
        <ul className="nav">
          <li>Rockets</li>
          <li>Missions</li>
          <li>Dragons</li>
          <li className="divider">|</li>
          <li>
            <NavLink className="nav-item" to="/profile" activeclassname="active">My Profile</NavLink>
          </li>
        </ul>
      </li>

    </ul>
  </div>
);

export default Navigation;
