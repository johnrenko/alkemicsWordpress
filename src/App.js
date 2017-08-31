import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';

import Homepage from './Views/Homepage';
import Brands from './Views/Brands';
import Customers from './Views/Customers';
import Partners from './Views/Partners';
import Article from './Views/Article';

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
    const partners = () => {
      return <Partners />;
    };
    const article = () => {
      return <Article />;
    };
    return (
      <Router>
        <div>
          <Route exact path="/" component={home} />
          <Route exact path="/article" component={article} />
          <Route path="/brands" component={brands} />
          <Route path="/customers" component={customers} />
          <Route path="/partners" component={partners} />
          <Route path="/article" component={article} />
        </div>
      </Router>
    );
  }
}

export default App;
