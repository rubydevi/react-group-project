import { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import { useDispatch, useSelector } from 'react-redux';
import Table from 'react-bootstrap/Table';
import { getMission } from '../Redux/Missions/missions';

const MissionsComponent = () => {
  const missions = useSelector((state) => state.missions.misions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMission());
  }, [dispatch]);

  return (
    <Container>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th>Button</th>
          </tr>
        </thead>
        <tbody>
          {missions.map((mission) => (
            <tr key={mission.mission_id}>
              <td>{mission.mission_name}</td>
              <td>{mission.description}</td>
              <td>{mission.description}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default MissionsComponent;
