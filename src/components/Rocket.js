import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { reserveRocket, unreserveRocket } from '../Redux/Rockets/rocketsSlice';
import '../styles/Rocket.css';

const Rocket = ({ rocket }) => {
  const dispatch = useDispatch();

  const handleReserveRocket = () => {
    dispatch(reserveRocket(rocket.id));
  };

  const handleCancelRocket = () => {
    dispatch(unreserveRocket(rocket.id));
  };

  return (
    <li className="rocket" key={rocket.id}>
      {rocket.flickr_images.length > 0 && (
      <img className="rocket-image" src={rocket.flickr_images[0]} alt={`Rocket ${rocket.name}`} />
      )}
      <div className="rocket-details">
        <h3 className="rocket-title">{rocket.name}</h3>
        <div>
          {/* Show badge when reserved */}
          {rocket.reserved && <span className="reserved-badge">Reserved</span>}
          <p className="rocket-description">
            {rocket.description}
          </p>
        </div>
        <button className="reserve-button" type="submit" onClick={handleReserveRocket}>
          Reserve Rocket
        </button>
        <button className="cancel-button" type="submit" onClick={handleCancelRocket}>
          Cancel Reservation
        </button>
      </div>
    </li>
  );
};

Rocket.propTypes = {
  rocket: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    flickr_images: PropTypes.arrayOf(PropTypes.string).isRequired,
    reserved: PropTypes.bool.isRequired,
  }).isRequired,
};

export default Rocket;
