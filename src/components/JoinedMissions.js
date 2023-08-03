import { ListGroup } from 'react-bootstrap';
import { useSelector } from 'react-redux/es/hooks/useSelector';

const JoinedMissions = () => {
  const missions = useSelector((state) => state.missions.missions);
  const joinmission = missions.filter((mission) => mission.reserved === true);

  return (
    <>
      {joinmission.length > 0 ? (
        <ListGroup>
          {joinmission.map((mission) => (
            <ListGroup.Item key={mission.mission_id}>{mission.mission_name}</ListGroup.Item>
          ))}
        </ListGroup>
      ) : (<div>You have no Reserved Missions</div>)}
    </>
  );
};

export default JoinedMissions;
