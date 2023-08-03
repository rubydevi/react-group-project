import React from 'react';
import { useSelector } from 'react-redux';

const ReservedRockets = () => {
  const rockets = useSelector((state) => state.rockets.rockets);
  const reservedRockets = rockets.filter((rocket) => rocket.reserved === true);

  if (reservedRockets.length === 0) {
    return <div>You have no reserved rockets.</div>;
  }

  return (
    <ul className="reserved-rockets">
      {reservedRockets.map((rocket) => (
        <li className="reserved-rocket" key={rocket.id}>{rocket.name}</li>
      ))}
    </ul>
  );
};

export default ReservedRockets;
