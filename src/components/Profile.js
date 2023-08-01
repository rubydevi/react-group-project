import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const ProfileComponent = () => (
  <Container>
    <Row>
      <table>
        <tr>
          <th>My Missions</th>
          <th>My Rockets</th>
        </tr>
        <tr>
          <td>Telstar</td>
          <td>Falcon 9</td>
        </tr>
      </table>
    </Row>

  </Container>
);
export default ProfileComponent;
