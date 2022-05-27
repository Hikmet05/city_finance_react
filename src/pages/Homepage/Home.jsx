import React from 'react';
import Banner from '../../components/Banner/Banner';
import Campaigns from '../../components/Campaigns/Campaigns';
import Form from '../../components/Form/Form';
import Navbar from '../../components/Navbar/Navbar';
import Slide from '../../components/Slider/Slide';

function Home() {
  return (
    <>
        <Navbar />
        <Banner />
        <Slide />
        <Campaigns />
        <Form />
    </>
  )
}

export default Home