import Container from 'react-bootstrap/Container';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRockets } from '../Redux/Rockets/rocketsSlice';
import Rocket from './Rocket';

const RocketsComponent = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rockets.rockets);
  const loading = useSelector((state) => state.rockets.loading);
  const error = useSelector((state) => state.rockets.error);

  useEffect(() => {
    if (rockets.length === 0) {
      dispatch(fetchRockets());
    }
  }, [dispatch, rockets.length]);

  if (loading) {
    return (
      <Container>
        <ul className="load">
          <div className="loader" />
        </ul>
      </Container>
    );
  }

  if (error) {
    return (
      <div>
        Error:
        {error}
      </div>
    );
  }

  return (
    <Container>
      <ul className="rockets">
        {rockets.map((rocket) => (
          <Rocket key={rocket.id} rocket={rocket} reserved={rocket.reserved} />
        ))}
      </ul>
    </Container>
  );
};

export default RocketsComponent;
