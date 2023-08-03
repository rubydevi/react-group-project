import React from 'react';
import { useSelector } from 'react-redux';
import { ListGroup } from 'react-bootstrap';

const ReservedRockets = () => {
  const rockets = useSelector((state) => state.rockets.rockets);
  const reservedRockets = rockets.filter((rocket) => rocket.reserved === true);

  if (reservedRockets.length === 0) {
    return <div>You have no reserved rockets.</div>;
  }

  return (
    <ListGroup>
      {reservedRockets.map((rocket) => (
        <ListGroup.Item key={rocket.id}>{rocket.name}</ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default ReservedRockets;
