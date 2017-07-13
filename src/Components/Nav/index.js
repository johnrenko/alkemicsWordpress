import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './Nav.css';

class Nav extends Component {
  static propTypes = {
    links: PropTypes.array,
  };

  static defaultProps = {
    links: [
      ['For brands', '/brands'],
      ['Customers', '/customers'],
      ['Partners', '/partners'],
      ['Log in', '/login'],
    ],
  };

  render() {
    const { links } = this.props;
    const nav = links.map(a =>
      <li key={a[0]}>
        <Link to={a[1]}>
          {a[0]}
        </Link>
      </li>
    );
    return (
      <div>
        <ul className="nav">
          {nav}
        </ul>
      </div>
    );
  }
}

export default Nav;
