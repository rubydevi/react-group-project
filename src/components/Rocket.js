import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Rocket.css';

const Rocket = ({ rocket }) => (
  <li className="rocket" key={rocket.id}>
    {rocket.flickr_images.length > 0 && (
    <img className="rocket-image" src={rocket.flickr_images[0]} alt={`Rocket ${rocket.name}`} />
    )}
    <div className="rocket-details">
      <h3 className="rocket-title">{rocket.name}</h3>
      <p className="rocket-description">
        {rocket.description}
      </p>
      <button className="reserve-button" type="submit">Reserve Rocket</button>
    </div>
  </li>
);

Rocket.propTypes = {
  rocket: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    flickr_images: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default Rocket;
