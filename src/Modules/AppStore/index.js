import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Button from '../../Components/Button';
import ImgBanner from '../../Components/ImgBanner';

import './AppStore.css';

class AppStore extends Component {
  static propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    images1: PropTypes.array,
    images2: PropTypes.array,
    button: PropTypes.string,
  };

  static defaultProps = {
    title: 'Power your Product Data with the Alkemics AppStore',
    images1: [
      'http://www.techalkemics.odns.fr/wordpress_back/wp-content/uploads/2017/07/logo-auchan.png',
      'http://www.techalkemics.odns.fr/wordpress_back/wp-content/uploads/2017/07/logo-carrefour.png',
      'http://www.techalkemics.odns.fr/wordpress_back/wp-content/uploads/2017/07/logo-casino.png',
      'http://www.techalkemics.odns.fr/wordpress_back/wp-content/uploads/2017/07/logo-e_leclerc.png',
    ],
    images2: [
      'http://www.techalkemics.odns.fr/wordpress_back/wp-content/uploads/2017/07/logo-auchan.png',
      'http://www.techalkemics.odns.fr/wordpress_back/wp-content/uploads/2017/07/logo-carrefour.png',
      'http://www.techalkemics.odns.fr/wordpress_back/wp-content/uploads/2017/07/logo-casino.png',
    ],
  };

  renderButton(value) {
    return value ? <Button content={value} primary /> : null;
  }

  renderSubtitle(value) {
    return value
      ? <p>
          {value}
        </p>
      : null;
  }

  render() {
    return (
      <div className="appstore__container">
        <h1>
          {this.props.title}
        </h1>
        <p>
          {this.renderSubtitle(this.props.subtitle)}
        </p>
        <div className="images">
          <ImgBanner imgs={this.props.images1} />
          <div className="images__3">
            <ImgBanner imgs={this.props.images2} />
          </div>
        </div>
        {this.renderButton(this.props.cta)}
      </div>
    );
  }
}

export default AppStore;
