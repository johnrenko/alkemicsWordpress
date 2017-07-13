import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './ImgBanner.css';

class ImgBanner extends Component {
  static propTypes = {
    imgs: PropTypes.array,
  };

  static defaultProps = {
    imgs: [
      'http://www.techalkemics.odns.fr/wp-content/uploads/2017/07/logo-auchan.png',
      'http://www.techalkemics.odns.fr/wp-content/uploads/2017/07/logo-carrefour.png',
      'http://www.techalkemics.odns.fr/wp-content/uploads/2017/07/logo-casino.png',
      'http://www.techalkemics.odns.fr/wp-content/uploads/2017/07/logo-e_leclerc.png',
      'http://www.techalkemics.odns.fr/wp-content/uploads/2017/07/logo-super_u.png',
      'http://www.techalkemics.odns.fr/wp-content/uploads/2017/07/logo-walmart.png',
    ],
  };

  renderList() {
    const { imgs } = this.props;
    const list = imgs.map(imgLink =>
      <img src={imgLink} key={imgLink} alt="retailerLogo" />
    );

    return list;
  }

  render() {
    return (
      <div className="ImgList">
        {this.renderList()}
      </div>
    );
  }
}

export default ImgBanner;
