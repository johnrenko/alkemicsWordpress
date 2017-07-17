import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Button from '../../Components/Button';

import './HeroHeader.css';

class HeroHeader extends Component {
  static propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    heroImage: PropTypes.string,
    ctaText: PropTypes.string,
    ctaLink: PropTypes.string,
  };

  static defaultProps = {
    title: 'The Collaboration Platform for Retail',
    subtitle: 'Connecting every brand with every retailer',
    heroImage:
      'http://www.techalkemics.odns.fr/wp-content/uploads/2017/07/hp-img.svg',
    ctaText: null,
    ctaLink: '',
  };

  renderButton(bool) {
    if (bool) {
      return <Button content={bool} primary />;
    }
  }

  render() {
    return (
      <div className="heroHeader">
        <h1>
          {this.props.title}
        </h1>
        <h2>
          {this.props.subtitle}
        </h2>
        <div className="hp-img">
          <img src={this.props.heroImage} alt="" />
        </div>
        {this.renderButton(this.props.ctaText)}
      </div>
    );
  }
}

export default HeroHeader;
