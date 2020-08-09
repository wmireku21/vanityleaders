import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from './components/NavBar';
import { Route } from 'react-router-dom';
import Home from './components/Home.js';
import Events from './components/Events.js';
import About from './components/About.js';
import Gallery from './components/Gallery.js';
import Contact from './components/Contact.js';

import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Route exact path="/" component={Home}/>
      <Route path="/events" component={Events}/>
      <Route path="/gallery" component={Gallery}/>
      <Route path="/about" component={About}/>
      <Route path="/contact" component={Contact}/>
    </div>
  );
}

export default App;
