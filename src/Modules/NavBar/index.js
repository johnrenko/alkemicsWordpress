import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

import Nav from '../../Components/Nav';
import HeaderAction from '../../Components/HeaderAction';
import logo from './img/logo.svg';

class NavBar extends Component {
  render() {
    return (
      <div className="NavBar">
        <Link to="/">
          <img src={logo} />
        </Link>
        <Nav />
        <HeaderAction />
      </div>
    );
  }
}

export default NavBar;
