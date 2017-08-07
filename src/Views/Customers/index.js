import React, { Component } from 'react';
import './Customers.css';

import HeroHeader from '../../Modules/HeroHeader';
import ImgBanner from '../../Components/ImgBanner';
import ValueBlock from '../../Modules/ValueBlock';
import NavBar from '../../Modules/NavBar';
import TalkToUs from '../../Modules/TalkToUs';
import Footer from '../../Modules/Footer';

class Brands extends Component {
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
    let dataURL =
      'http://www.techalkemics.odns.fr/wordpress_back/wp-json/wp/v2/pages/58';
    fetch(dataURL).then(res => res.json()).then(res => {
      this.setState({
        title: res.acf.title,
        subtitle: res.acf.subtitle,
        heroImage: res.acf.video_url,
        boxTitle: res.acf.card_title,
        boxContent: res.acf.card_subtitle,
        boxMainCTA: res.acf.card_main_cta,
        boxSecondCTA: res.acf.card_second_cta,
        boxImgs: [
          res.acf.logo_retailer_1.url,
          res.acf.logo_retailer_2.url,
          res.acf.logo_retailer_3.url,
          res.acf.logo_retailer_4.url,
          res.acf.logo_retailer_5.url,
          res.acf.logo_retailer_6.url,
        ],
        blockContent: {
          data: [
            {
              title: res.acf.infoblock_title_1,
              content: res.acf.infoblock_content_1,
              icon: res.acf.infoblock_icon_1.url,
              id: res.acf.infoblock_icon_1.id,
            },
            {
              title: res.acf.infoblock_title_2,
              content: res.acf.infoblock_content_2,
              icon: res.acf.infoblock_icon_2.url,
              id: res.acf.infoblock_icon_2.id,
            },
            {
              title: res.acf.infoblock_title_3,
              content: res.acf.infoblock_content_3,
              icon: res.acf.infoblock_icon_3.url,
              id: res.acf.infoblock_icon_3.id,
            },
            {
              title: res.acf.infoblock_title_4,
              content: res.acf.infoblock_content_4,
              icon: res.acf.infoblock_icon_4.url,
              id: res.acf.infoblock_icon_4.id,
            },
          ],
        },
        valueTitle: res.acf.block_2_title,
        infoblock_cta: res.acf.infoblock_cta,
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
        <div className="ImgBanner">
          <ImgBanner imgs={this.state.boxImgs} />
        </div>
        <ValueBlock
          valueTitle={this.state.valueTitle}
          blocksToRender={this.state.blockContent}
          cta2={this.state.infoblock_cta}
        />
        <TalkToUs />
        <Footer />
      </div>
    );
  }
}

export default Brands;
