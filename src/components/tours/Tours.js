import './Tours.css';
import Tour from './tour/Tour';

function Tours(props) {
    return (
        <div className="tours">
            <Tour key={props.tour.id} toursName={props.tour.name} toursImage={props.tour.image} />
        </div>
    );
}

export default Tours;