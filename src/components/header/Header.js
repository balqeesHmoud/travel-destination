
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import { Link } from "react-router-dom";
// Import the CSS file
import './Header.css';
function Header() {
    return (
        <div className="header">
             <Card >
                <Card.Header className="navbare"><Link to="/">Home</Link></Card.Header>
                <Card.Body>
                    <Card.Title><h1 id="welcoming">Welcom to Travel Destination</h1> </Card.Title> 
                </Card.Body>
            </Card>

        </div>


    )
}
export default Header;
