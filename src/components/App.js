import React from 'react';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Home, About, Education, Contact, Navigation, Projects, Skills } from './';
// import ReactBootstrap, { Jumbotron, Button, Col, Grid, Panel, FormGroup, Breadcrumb } from 'react-bootstrap';
import * as Scroll from 'react-scroll';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

import '../css/index.css';



const App = () => {
  Events.scrollEvent.register('begin', function(to, element) {
    console.log("begin", arguments);
  });
  console.log(scroller);
  return (
    <div>
      <main>
        <Navigation />
        <Home />
        <About />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
    </div>
)
}

export default App;