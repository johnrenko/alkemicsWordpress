import React, { Component } from 'react';
import './Partners.css';

import NavBar from '../../Modules/NavBar';
import HeroHeader from '../../Modules/HeroHeader';
import AppStore from '../../Modules/AppStore';
import TalkToUs from '../../Modules/TalkToUs';
import Footer from '../../Modules/Footer';

class Partners extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      subtitle: '',
      content: '',
      logoTitle: '',
      logos: [],
    };
  }

  componentDidMount() {
    let dataURL =
      'http://www.techalkemics.odns.fr/wordpress_back/wp-json/wp/v2/pages/109';
    fetch(dataURL).then(res => res.json()).then(res => {
      this.setState({
        title: res.acf.title,
        subtitle: res.acf.subtitle,
        content: res.acf.content,
        logoTitle: res.acf.logo_title,
        logos: [],
      });
    });
  }

  render() {
    return (
      <div className="partners">
        <div className="NavHeader">
          <NavBar />
          <HeroHeader title={this.state.title} subtitle={this.state.subtitle} />
        </div>
        <p>
          {this.state.content}
        </p>
        <AppStore title={this.state.logoTitle} />
        <TalkToUs />
        <Footer />
      </div>
    );
  }
}

export default Partners;
