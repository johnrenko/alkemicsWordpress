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

  renderTitle(value) {
    return value
      ? <h1>
          {value}
        </h1>
      : <div className="selector" />;
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
        {this.renderTitle(this.props.title)}
        {this.renderSubtitle(this.props.subtitle)}
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
