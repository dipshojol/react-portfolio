import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Home, About, Contact } from './pages';
import ReactBootstrap, {Jumbotron, Button, Col, Grid, Panel, FormGroup, Breadcrumb} from 'react-bootstrap'

import '../css/index.css';



const App = () => {
  return (
    <Router>
      <header>
        <ul>
          <li><Link to="/">home</Link></li>
          <li><Link to="/about">about</Link> </li>
          <li><Link to="/">contact</Link></li>
          
        </ul>
        <Button variant="secondary">Secondary</Button>
        <Breadcrumb>
  <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
  <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
    Library
  </Breadcrumb.Item>
  <Breadcrumb.Item active>Data</Breadcrumb.Item>
</Breadcrumb>
      </header>

      <main>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/contact" exact component={Contact} />
      </main>
      
      <footer>
        <h2>this is a footer</h2>
      </footer>
    </Router>
)
}

export default App;