import React, { Component } from 'react';
import './Customers.css';

import HeroHeader from '../../Modules/HeroHeader';
import NavBar from '../../Modules/NavBar';
import AppStore from '../../Modules/AppStore';
import TalkToUs from '../../Modules/TalkToUs';
import Footer from '../../Modules/Footer';

class Brands extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      subtitle: '',
      logoTitle: '',
    };
  }

  componentDidMount() {
    let dataURL =
      'http://www.techalkemics.odns.fr/wordpress_back/wp-json/wp/v2/pages/114';
    fetch(dataURL).then(res => res.json()).then(res => {
      this.setState({
        title: res.acf.title,
        subtitle: res.acf.subtitle2,
        logoTitle: res.acf.logo_title,
      });
    });
  }

  render() {
    return (
      <div>
        <div className="NavHeader">
          <NavBar />
          <HeroHeader title={this.state.title} subtitle={this.state.subtitle} />
        </div>
        <AppStore title={this.state.logoTitle} />
        <TalkToUs />
        <Footer />
      </div>
    );
  }
}

export default Brands;
