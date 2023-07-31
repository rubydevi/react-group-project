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
          <li><NavLink to="/">Rockets</NavLink></li>
          <li><NavLink to="/missions">Missions</NavLink></li>
          <li><NavLink to="/dragons">Dragons</NavLink></li>
          <span className="divider">|</span>
          <li><NavLink to="/profile">My Profile</NavLink></li>
        </ul>
      </li>

    </ul>
  </Container>
);

export default Navigation;
