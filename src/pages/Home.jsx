import React from 'react'
import Header from '../components/Header';
import Banner from '../components/Banner';
import Services from '../components/Services';
import Donor from '../components/Donor';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
    <Header/>
    <Banner/>

    <Services/>
    <Donor/>
    <Footer/>
    </div>
  )
}

export default Home;
