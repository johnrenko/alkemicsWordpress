import React, { Component } from 'react';
import './Partners.css';

import NavBar from '../../Modules/NavBar';
import HeroHeader from '../../Modules/HeroHeader';
import AppStore from '../../Modules/AppStore';
import TalkToUs from '../../Modules/TalkToUs';
import Footer from '../../Modules/Footer';

class Partners extends Component {
  render() {
    return (
      <div>
        <div className="NavHeader">
          <NavBar />
          <HeroHeader />
        </div>
        <AppStore />
        <TalkToUs />
        <Footer />
      </div>
    );
  }
}

export default Partners;
