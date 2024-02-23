
import './Tour.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

function Tour({ tour }) {
  return (
    <div className="tour">
      <Link to={`/city/${tour.id}`} style={{ textDecoration: 'none' }}>
        <Card style={{ width: '25rem', cursor: 'pointer' }}>
          <Card.Img variant="top" src={tour.image} />
          <Card.Body>
            <Card.Title>{tour.name}</Card.Title>
          </Card.Body>
        </Card>
      </Link>
    </div>
  );
}

export default Tour;
