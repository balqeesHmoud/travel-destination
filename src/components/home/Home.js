import React from 'react';
import Header from '../header/Header.js';
import Tours from '../tours/Tours.js';
import Footer from '../footer/Footer.js';

function Home() {
  return (
    <div className="home">
      <Header />
      <Tours />
      <Footer/>
    </div>
  );
}

export default Home;
