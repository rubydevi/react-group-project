import { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import Table from 'react-bootstrap/Table';
import { getMission, joinMission, leaveMission } from '../Redux/Missions/missions';

const MissionsComponent = () => {
  const missions = useSelector((state) => state.missions.missions);
  console.log(missions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMission());
  }, [dispatch]);

  const join = (id) => {
    dispatch(joinMission(id));
  };

  const leave = (id) => {
    dispatch(leaveMission(id));
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
                {mission.reserved
                  ? (<Button variant="success">Active Member</Button>)
                  : (<Button variant="secondary">NOT A MEMBER</Button>)}
              </td>
              <td>
                {mission.reserved
                  ? (<Button variant="outline-danger" onClick={() => leave(mission.mission_id)}>Leave Mission</Button>)
                  : (<Button variant="outline-secondary" onClick={() => join(mission.mission_id)}>Join Mission</Button>)}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default MissionsComponent;
