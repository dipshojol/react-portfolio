import React from 'react';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Home, Education, Contact, Navigation, Projects, Resume, Footer, Skills } from './';
// import ReactBootstrap, { Jumbotron, Button, Col, Grid, Panel, FormGroup, Breadcrumb } from 'react-bootstrap';

import '../css/index.css';



const App = () => {
  // const scrollPositionY = window.scrollY;
  return (
    <div>
      <main>
        <Navigation />
        <Home />
        <Projects />
        <Skills />
        <Education />
        <Resume />
        <Contact />
        {/* <Footer /> */}
      </main>
    </div>
)
}

export default App;