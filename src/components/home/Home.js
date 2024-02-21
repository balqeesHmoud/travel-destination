import toursData from '../../data/dp.json';
import Header from '../header/Header.js';
import Tours from '../tours/Tours.js';
import Footer from '../footer/Footer.js';

function Home() {
    console.log(toursData);
    return (
        <div className="home">
            <Header />
            {toursData.map((tour, index) => (
                <Tours key={tour.id} tour={tour} index={index} />
            ))}
            <Footer />
        </div>
    );
}

export default Home;