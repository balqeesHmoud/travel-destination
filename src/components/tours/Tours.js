import './Tours.css';
import Tour from './tour/Tour';
function Tours (props){
    return(
        <div className="tours">
            <Tour toursName={props.toursName} toursImage={props.toursImage} />
        </div>
    );
}

export default Tours;





