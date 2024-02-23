import React from 'react';
import './Tours.css';
import Tour from './tour/Tour';
import toursData from '../../data/dp.json';

function Tours() {
  return (
    <div className="tours">
      {toursData.map((tour) => (
        <Tour key={tour.id} tour={tour} />
      ))}
    </div>
  );
}

export default Tours;
