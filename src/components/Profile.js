import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import JoinedMissions from './JoinedMissions';
import ReservedRockets from './ReservedRockets';
import ReservedDragons from './ReservedDragons';

const ProfileComponent = () => (
  <Container>
    <Row>
      <table>
        <thead>
          <tr>
            <th>My Missions</th>
            <th>My Rockets</th>
            <th>My Dragons</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <JoinedMissions />
            </td>
            <td>
              <ReservedRockets />
            </td>
            <td>
              <ReservedDragons />
            </td>
          </tr>
        </tbody>
      </table>
    </Row>

  </Container>
);
export default ProfileComponent;
