import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';

import Homepage from './Views/Homepage';
import Brands from './Views/Brands';
import Customers from './Views/Customers';

class App extends Component {
  render() {
    const home = () => {
      return <Homepage />;
    };
    const brands = () => {
      return <Brands />;
    };
    const customers = () => {
      return <Customers />;
    };
    return (
      <Router>
        <div>
          <Route exact path="/" component={home} />
          <Route path="/brands" component={brands} />
          <Route path="/customers" component={customers} />
        </div>
      </Router>
    );
  }
}

export default App;
