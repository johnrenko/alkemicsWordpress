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
        blockContent: {
          data: [
            {
              title: res[0].acf.block_2_title_1,
              content: res[0].acf.block_2_content_1,
              icon: res[0].acf.block_2_icon_1.url,
              id: res[0].acf.block_2_icon_1.id,
            },
            {
              title: res[0].acf.block_2_title_2,
              content: res[0].acf.block_2_content_2,
              icon: res[0].acf.block_2_icon_2.url,
              id: res[0].acf.block_2_icon_2.id,
            },
            {
              title: res[0].acf.block_2_title_3,
              content: res[0].acf.block_2_content_3,
              icon: res[0].acf.block_2_icon_3.url,
              id: res[0].acf.block_2_icon_3.id,
            },
            {
              title: res[0].acf.block_2_title_4,
              content: res[0].acf.block_2_content_4,
              icon: res[0].acf.block_2_icon_4.url,
              id: res[0].acf.block_2_icon_4.id,
            },
          ],
        },
        valueTitle: res[0].acf.block_2_title,
        cta2: res[0].acf.cta_2,
        quoteContent: res[0].acf.quote,
        quotepic: res[0].acf.quote_image,
        quoteName: res[0].acf.quote_name,
        quoteRole: res[0].acf.quote_title,
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
  }
}

export default Homepage;
