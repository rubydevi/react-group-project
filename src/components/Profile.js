import React from 'react';
import Container from 'react-bootstrap/Container';
import JoinedMissions from './JoinedMissions';
import ReservedRockets from './ReservedRockets';
import ReservedDragons from './ReservedDragons';
import '../styles/Profile.css';

const ProfileComponent = () => (
  <Container>
    <div className="profile-table-container">
      <table className="profile-table">
        <thead>
          <tr>
            <th>My Missions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <JoinedMissions />
            </td>
          </tr>
        </tbody>
      </table>

      <table className="profile-table">
        <thead>
          <tr>
            <th>My Rockets</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <ReservedRockets />
            </td>
          </tr>
        </tbody>
      </table>

      <table className="profile-table">
        <thead>
          <tr>
            <th>My Dragons</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <ReservedDragons />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </Container>
);

export default ProfileComponent;
