import React from 'react';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Home, About, Contact, Navigation, Projects, Resume, Footer } from './';
// import ReactBootstrap, { Jumbotron, Button, Col, Grid, Panel, FormGroup, Breadcrumb } from 'react-bootstrap';

import '../css/index.css';



const App = () => {
  // const scrollPositionY = window.scrollY;
  return (
    <div>
      <main>
        <Navigation />
        <Home />
        <About />
        <Contact />
        <Projects />
        <Resume />
        <Footer />
      </main>
    </div>
)
}

export default App;