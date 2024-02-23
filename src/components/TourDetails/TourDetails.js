import './TourDetails.css';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useParams } from 'react-router-dom';
import toursData from '../../data/dp.json';
import Header from '../header/Header';
import Footer from '../footer/Footer';

function TourDetails() {
  const { id } = useParams();
  const selectTour = toursData.find((tour) => tour.id === id);

  const { name, info, image } = selectTour;

  const [fullDesc, setFullDesc] = useState(false);

  const readDesc = () => {
    setFullDesc(!fullDesc);
  };

  return (
    <>     
     <Header />
    

    <div className="tour-details">
      
      <Card style={{ width: '25rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
        {fullDesc ? info : `${info.substring(0, 120)}...`}
            <br />
            <br />
        </Card.Text>
        <Button onClick={readDesc}>{fullDesc ? 'See Less' : 'See More'}</Button>
      </Card.Body>
    </Card>
    </div>
    <Footer/>
    </>

  );
}

export default TourDetails;
