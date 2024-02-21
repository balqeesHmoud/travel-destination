
import toursData from '../../data/dp.json'
import Header from '../header/Header.js';
import Tours from '../tours/Tours.js';
import Footer from '../footer/Footer.js';
import TourDetails from '../TourDetails/TourDetails.js';
function Home() {
    console.log(toursData[0]);
    return (

        <div className="home">
        <Header />
        {toursData.map(tour => (
            <Tours key={tour.id} toursName={tour.name} toursImage={tour.image} />
        ))}
        <Footer />
        <TourDetails/>
    </div>
    );
}
export default Home;




