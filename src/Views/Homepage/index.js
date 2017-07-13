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
      boxTitle: '',
      boxContent: '',
      boxMainCTA: '',
      boxSecondCTA: '',
      boxImgs: [],
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
        boxTitle: res[0].acf.card_title,
        boxContent: res[0].acf.card_subtitle,
        boxMainCTA: res[0].acf.card_main_cta,
        boxSecondCTA: res[0].acf.card_second_cta,
        boxImgs: [
          res[0].acf.logo_1,
          res[0].acf.logo_2,
          res[0].acf.logo_3,
          res[0].acf.logo_4,
          res[0].acf.logo_5,
          res[0].acf.logo_6,
        ],
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
        <BoxContent
          title={this.state.boxTitle}
          content={this.state.boxContent}
          mainCTA={this.state.boxMainCTA}
          secondCTA={this.state.boxSecondCTA}
          imgs={this.state.boxImgs}
        />
        <Quote />
      </div>
    );
  }
}

export default Homepage;
