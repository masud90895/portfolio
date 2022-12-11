import React from 'react';
import About from './About';
import Advertance from './Advertance';
import Banner from './Banner';
import Contact from './Contact';
import Projects from './Projects';

const Home = () => {
    return (
        <>
          <Banner/>
      <Advertance/>
      <Projects/>
      <About/>
      <Contact/>
        </>
    );
};

export default Home;