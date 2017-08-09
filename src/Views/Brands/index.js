import React, { Component } from 'react';
import './Brands.css';

import NavBar from '../../Modules/NavBar';
import HeroHeader from '../../Modules/HeroHeader';
import ImgBanner from '../../Components/ImgBanner';
import ValueBlock from '../../Modules/ValueBlock';
import AppStore from '../../Modules/AppStore';
import BoxContent from '../../Modules/BoxContent';
import Quote from '../../Components/Quote';
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
        valueTitle: res.acf.infoblock_main_title,
        infoblock_cta: res.acf.infoblock_cta,
        appstoreTitle: res.acf.appstore_title,
        appstoreSubtitle: res.acf.appstore_subtitle,
        appstoreImages1: [
          res.acf.appstore_image_1,
          res.acf.appstore_image_2,
          res.acf.appstore_image_3,
          res.acf.appstore_image_4,
        ],
        appstoreImages2: [
          res.acf.appstore_image_5,
          res.acf.appstore_image_6,
          res.acf.appstore_image_7,
        ],
        quoteContent: res.acf.quote,
        quotepic: res.acf.quote_image,
        quoteName: res.acf.quote_name,
        quoteRole: res.acf.quote_title,
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
          />
        </div>
        <div className="ImgBanner">
          <ImgBanner imgs={this.state.boxImgs} />
        </div>
        <ValueBlock
          valueTitle={this.state.valueTitle}
          blocksToRender={this.state.blockContent}
          cta2={this.state.infoblock_cta}
        />
        <AppStore
          title={this.state.appstoreTitle}
          subtitle={this.state.appstoreSubitle}
          cta={this.state.appstoreCta}
          images1={this.state.appstoreImages1}
          images2={this.state.appstoreImages2}
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
        <TalkToUs />
        <Footer />
      </div>
    );
  }
}

export default Brands;
