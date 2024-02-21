import './Tour.css';

function Tour(props) {
    return (
        <div className="tour">
            <h2 className="tourName">{props.name}</h2>
            <img className="tourImage" src={props.image} alt="tour img" />
        </div>
    );
}

export default Tour;