import React, { Component } from 'react';
import './Homepage.css';

import HeaderAction from '../../Components/HeaderAction';
import HeroHeader from '../../Modules/HeroHeader';
import ValueBlock from '../../Modules/ValueBlock';
import NavBar from '../../Modules/NavBar';
import BoxContent from '../../Modules/BoxContent';
import Quote from '../../Components/Quote';

class Homepage extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      subtitle: '',
      heroImage: '',
      ctaText: '',
    };
  }

  componentDidMount() {
    let dataURL = 'http://www.techalkemics.odns.fr/wp-json/wp/v2/pages';
    fetch(dataURL).then(res => res.json()).then(res => {
      this.setState({
        title: res[0].acf.title,
        subtitle: res[0].acf.subtitle,
        heroImage: res[0].acf.heroimage,
        ctaText: res[0].acf.cta_top,
      });
    });
  }

  render() {
    return (
      <div>
        <div className="NavHeader">
          <NavBar />
          <HeroHeader
            title={this.state.title}
            subtitle={this.state.subtitle}
            heroImage={this.state.heroImage}
            ctaText={this.state.ctaText}
            ctaLink=""
          />
        </div>
        <ValueBlock />
        <BoxContent />
        <Quote />
      </div>
    );
  }
}

export default Homepage;
