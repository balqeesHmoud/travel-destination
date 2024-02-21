import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import TourDetails from './components/TourDetails/TourDetails';
import { Routes, Route } from 'react-router-dom';
import toursData from './data/dp.json';


function App() {
  

  return (
    
    <>
    <Home/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path="/city/:id" element={<TourDetails toursData={toursData} />} />
    </Routes>
    </>
  );
}

export default App;
