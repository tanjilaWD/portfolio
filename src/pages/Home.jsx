import React from 'react';
import Hero from '../Components/Hero';
import About from '../Components/About';
import Skills from '../Components/Skills';
import Projects from '../Components/Projects';

const Home = () => {
    return (
        <div>
          <Hero/>
          <About/> 
          <Skills/> 
          <Projects/>
        </div>
    );
};

export default Home;