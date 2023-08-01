import Container from 'react-bootstrap/Container';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRockets } from '../Redux/Rockets/rocketsSlice';

const RocketsComponent = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rockets.rockets);
  const loading = useSelector((state) => state.rockets.loading);
  const error = useSelector((state) => state.rockets.error);

  useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
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
      <h1>Rockets Page</h1>
      <div>
        <ul>
          {rockets.map((rocket) => (
            <li key={rocket.id}>
              <strong>Name:</strong>
              {' '}
              {rocket.name}
              <br />
              <strong>Type:</strong>
              {' '}
              {rocket.type}
              <br />
              <strong>ID:</strong>
              {' '}
              {rocket.id}
              <br />
              {rocket.flickr_images.length > 0 && (
                <img src={rocket.flickr_images[0]} alt={`Rocket ${rocket.name}`} />
              )}
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
};

export default RocketsComponent;
