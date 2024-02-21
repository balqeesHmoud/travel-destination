

import { Link} from "react-router-dom";
// Import the CSS file
import './Header.css';
function Header() {
    return (
        <div className="header">
            <nav className="navbare">
            <Link to="/home">Home</Link>
            <Link to="/tourDetails">Details</Link>
            </nav>
            <h1 id="welcoming">Welcom to Travel Destination</h1>
        </div>
    )
}
export default Header;
