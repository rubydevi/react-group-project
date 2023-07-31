import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import logo from '../images/planet.png';

const Navigation = () => (
  <Container>
    <ul className="menu">
      <li className="logo">
        <img src={logo} alt="logo" />
        <h3 className="logo-text">Space Travelers&apos; Hub</h3>
      </li>
      <li>
        <ul className="nav">
          <li><NavLink to="/" className={({ isActive }) => (isActive ? 'active-link' : '')}>Rockets</NavLink></li>
          <li><NavLink to="/missions" className={({ isActive }) => (isActive ? 'active-link' : '')}>Missions</NavLink></li>
          <li><NavLink to="/dragons" className={({ isActive }) => (isActive ? 'active-link' : '')}>Dragons</NavLink></li>
          <span className="divider">|</span>
          <li><NavLink to="/profile" className={({ isActive }) => (isActive ? 'active-link' : '')}>My Profile</NavLink></li>
        </ul>
      </li>

    </ul>
  </Container>
);

export default Navigation;
