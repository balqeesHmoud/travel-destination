import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/home/Home';
import TourDetails from './components/TourDetails/TourDetails';
import { Routes, Route } from 'react-router-dom';


function App() {
  

  return (
    
    <>
    {/* <Home/> */}
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path="/city/:id" element={<TourDetails/>} />
    </Routes>
    </>
  );
}

export default App;
