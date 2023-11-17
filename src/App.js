// App.js

import React from 'react';
import Header from './components/Home';
import Skill from './components/Skill';
import Hobby from './components/Hobby';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import './styles.css';

const App = () => {
  return (
    <div>
      <Header />
      <Skill />
      <Hobby />
      <AboutMe />
      <Contact />
    </div>
  );
}

export default App;
