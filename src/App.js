import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';

import Homepage from './Views/Homepage';
import Brands from './Views/Brands';

class App extends Component {
  render() {
    const home = () => {
      return <Homepage />;
    };
    const brands = () => {
      return <Brands />;
    };
    return (
      <Router>
        <div>
          <Route exact path="/" component={home} />
          <Route exact path="/front-website" component={home} />
          <Route path="/brands" component={brands} />
        </div>
      </Router>
    );
  }
}

export default App;
