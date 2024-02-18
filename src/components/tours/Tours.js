import './Tours.css';

function Tours (props){
    return(
        <div className="tour">
        <h2 className="tourName">{props.toursName}</h2>
        <img className="tourImage" src={props.toursImage} alt="tour img"/>
         
        </div>
    );
}

export default Tours;
