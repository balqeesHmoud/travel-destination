import toursData from '../../data/dp.json'
import Header from '../header/Header.js';
import Tours from '../tours/Tours.js';
import Footer from '../footer/Footer.js';
function Home(){
    console.log(toursData[0]);
    return(
        
        <div className="home">
        <Header/>
        {toursData.map(element =><Tours toursName={element.name} toursImage={element.image} />)}
        <Footer/>
        </div>
        
    );
}
export default Home;
