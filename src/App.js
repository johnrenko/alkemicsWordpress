import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';

import Homepage from './Views/Homepage';

class App extends Component {
  render() {
    const home = () => {
      return <Homepage />;
    };
    return (
      <Router>
        <div>
          <Route exact path="/" component={home} />
          <Route exact path="/front-website" component={home} />
        </div>
      </Router>
    );
  }
}

export default App;
