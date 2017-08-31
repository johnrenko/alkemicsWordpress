import React, { Component } from 'react';
import './Article.css';

import NavBar from '../../Modules/NavBar';
import HeroHeader from '../../Modules/HeroHeader';
import Quote from '../../Components/Quote';
import TalkToUs from '../../Modules/TalkToUs';
import Footer from '../../Modules/Footer';

class Article extends Component {
  constructor() {
    super();
    this.state = {
      title: 'Article page',
      content: [],
      quote1: null,
      quoteName1: null,
      quoteRole1: null,
      quoteImg1: null,
    };
  }

  componentDidMount() {
    let dataURL =
      'http://www.techalkemics.odns.fr/wordpress_back/wp-json/wp/v2/posts/131';
    fetch(dataURL)
      .then(res => res.json())
      .then(res => {
        this.setState({
          content: res.content.rendered,
          quoteName1: res.acf.quote1_img,
          quoteRole1: res.acf.quote1_role,
          quoteName1: res.acf.quote1_name,
          quoteImg1: res.acf.quote1_img,
        });
      });
  }

  render() {
    return (
      <div className="article">
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
        <div
          dangerouslySetInnerHTML={{ __html: this.state.content }}
          className="content"
        />
        <Quote
          bg={false}
          quote={this.state.quote1}
          pic={this.state.quoteImg1}
          name={this.state.quoteName1}
          role={this.state.quoteRole1}
        />
        <TalkToUs />
        <Footer />
      </div>
    );
  }
}

export default Article;
