import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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

  renderLink(a) {
    return a[0] === 'Log in' ? (
      <li key={a[0]}>
        <a
          href="https://stream.alkemics.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          {a[0]}
        </a>
      </li>
    ) : (
      <li key={a[0]}>
        <Link to={a[1]}>{a[0]}</Link>
      </li>
    );
  }

  render() {
    const { links } = this.props;
    const nav = links.map(a => this.renderLink(a));
    return (
      <div>
        <ul className="nav">{nav}</ul>
      </div>
    );
  }
}

export default Nav;
