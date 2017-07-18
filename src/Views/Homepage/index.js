import React, { Component } from 'react';
import './Homepage.css';

import HeroHeader from '../../Modules/HeroHeader';
import ValueBlock from '../../Modules/ValueBlock';
import NavBar from '../../Modules/NavBar';
import BoxContent from '../../Modules/BoxContent';
import Quote from '../../Components/Quote';

class Homepage extends Component {
  constructor() {
    super();
    this.state = {
      loaded: false,
      title: '',
      subtitle: '',
      heroImage: '',
      ctaText: '',
      valueTitle: '',
      blockContent: { data: [] },
      cta2: '',
      boxTitle: '',
      boxContent: '',
      boxMainCTA: '',
      boxSecondCTA: '',
      boxImgs: [],
      quoteContent: '',
      quotepic: '',
      quoteName: '',
      quoteRole: '',
    };
  }

  componentDidMount() {
    let dataURL =
      'http://www.techalkemics.odns.fr/wordpress_back/wp-json/wp/v2/pages/2';
    fetch(dataURL).then(res => res.json()).then(res => {
      this.setState({
        loaded: true,
        title: res.acf.title,
        subtitle: res.acf.subtitle,
        heroImage: res.acf.heroimage,
        ctaText: res.acf.cta_top,
        boxTitle: res.acf.card_title,
        boxContent: res.acf.card_subtitle,
        boxMainCTA: res.acf.card_main_cta,
        boxSecondCTA: res.acf.card_second_cta,
        boxImgs: [
          res.acf.logo_1,
          res.acf.logo_2,
          res.acf.logo_3,
          res.acf.logo_4,
          res.acf.logo_5,
          res.acf.logo_6,
        ],
        blockContent: {
          data: [
            {
              title: res.acf.block_2_title_1,
              content: res.acf.block_2_content_1,
              icon: res.acf.block_2_icon_1.url,
              id: res.acf.block_2_icon_1.id,
            },
            {
              title: res.acf.block_2_title_2,
              content: res.acf.block_2_content_2,
              icon: res.acf.block_2_icon_2.url,
              id: res.acf.block_2_icon_2.id,
            },
            {
              title: res.acf.block_2_title_3,
              content: res.acf.block_2_content_3,
              icon: res.acf.block_2_icon_3.url,
              id: res.acf.block_2_icon_3.id,
            },
            {
              title: res.acf.block_2_title_4,
              content: res.acf.block_2_content_4,
              icon: res.acf.block_2_icon_4.url,
              id: res.acf.block_2_icon_4.id,
            },
          ],
        },
        valueTitle: res.acf.block_2_title,
        cta2: res.acf.cta_2,
        quoteContent: res.acf.quote,
        quotepic: res.acf.quote_image,
        quoteName: res.acf.quote_name,
        quoteRole: res.acf.quote_title,
      });
    });
  }

  render() {
    if (this.state.loaded) {
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
          <ValueBlock
            valueTitle={this.state.valueTitle}
            blocksToRender={this.state.blockContent}
            cta2={this.state.cta2}
          />
          <BoxContent
            title={this.state.boxTitle}
            content={this.state.boxContent}
            mainCTA={this.state.boxMainCTA}
            secondCTA={this.state.boxSecondCTA}
            imgs={this.state.boxImgs}
          />
          <Quote
            quote={this.state.quoteContent}
            pic={this.state.quotepic}
            name={this.state.quoteName}
            role={this.state.quoteRole}
          />
        </div>
      );
    } else {
      return <div className="Loader">Loading...</div>;
    }
  }
}

export default Homepage;
