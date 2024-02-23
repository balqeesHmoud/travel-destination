import './Footer.css';
import 'boxicons/css/boxicons.min.css';
import Card from 'react-bootstrap/Card';


function Footer() {
    return (
        <div className="footer">
            <p className="copyWrite">All intellectual property rights for this content are reserved, and any copying, transfer, or usage in any form is prohibited without obtaining official permission from the legal owner. © Travel Destination</p>
            <div className="media-buttons">
                <a href="#" style={{ background: '#4267b2' }} className="link">
                    <box-icon type='logo' name='facebook-circle'></box-icon>
                    <i className='bx bxl-facebook-circle'></i>
                </a>
                <a href="#" style={{ background: '#1da1f2' }} className="link">
                    <box-icon type='logo' name='twitter'></box-icon>
                    <i className='bx bxl-twitter'></i>
                </a>
                <a href="#" style={{ background: '#e1306c' }} className="link">
                    <box-icon type='logo' name='instagram'></box-icon>
                    <i className='bx bxl-instagram'></i>
                </a>
                <a href="#" style={{ background: '#ff0000' }} className="link">
                    <box-icon type='logo' name='youtube'></box-icon>
                    <i className='bx bxl-youtube'></i>
                </a>
            </div>
           
        </div>
    );
}

export default Footer;

