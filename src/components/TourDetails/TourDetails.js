// TourDetails.js
import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import toursData from '../../data/dp.json';

const TourDetails = () => {
  const { id } = useParams();
  const [showFullDescription, setShowFullDescription] = useState(false);

  // Find the tour with the matching id
  const tour = toursData.find(tour => tour.id === id);

  // If tour is not found, display a message
  if (!tour) {
    return <div>Tour not found!</div>;
  }

  // Extract first three lines of the description
  const shortDescription = tour.info.split('\n').slice(0, 3).join('\n');

  return (
    <div className="tour-details">
      <h2>{tour.name}</h2>
      <img src={tour.image} alt={tour.name} />
      <p>
        {showFullDescription ? tour.info : shortDescription}
        {tour.info.split('\n').length > 3 &&
          (showFullDescription ? (
            <button onClick={() => setShowFullDescription(false)}>See less</button>
          ) : (
            <button onClick={() => setShowFullDescription(true)}>See more</button>
          ))}
      </p>
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default TourDetails;
