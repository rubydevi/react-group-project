import { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import Table from 'react-bootstrap/Table';
import { getMission, joinMission } from '../Redux/Missions/missions';

const MissionsComponent = () => {
  const missions = useSelector((state) => state.missions.missions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMission());
  }, [dispatch]);

  const getID = (id) => {
    dispatch(joinMission(id));
  };

  return (
    <Container>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th>.</th>
          </tr>
        </thead>
        <tbody>
          {missions.map((mission) => (
            <tr key={mission.mission_id}>
              <td>{mission.mission_name}</td>
              <td>{mission.description}</td>
              <td>
                {mission.status
                  ? (<Button variant="success">Active Member</Button>)
                  : (<Button variant="secondary">NOT A MEMBER</Button>)}
              </td>
              <td>
                {mission.status
                  ? (<Button variant="outline-danger" onClick={getID(mission.mission_id)}>Leave Mission</Button>)
                  : (<Button variant="outline-secondary" onClick={() => getID(mission.mission_id)}>Join Mission</Button>)}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default MissionsComponent;
