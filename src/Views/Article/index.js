import React, { Component } from 'react';
import './Article.css';

import NavBar from '../../Modules/NavBar';
import HeroHeader from '../../Modules/HeroHeader';
import TalkToUs from '../../Modules/TalkToUs';
import Footer from '../../Modules/Footer';

class Article extends Component {
  constructor() {
    super();
    this.state = {
      title: 'Article page',
      content: [],
    };
  }

  componentDidMount() {
    let dataURL =
      'http://www.techalkemics.odns.fr/wordpress_back/wp-json/wp/v2/posts/131';
    fetch(dataURL).then(res => res.json()).then(res => {
      this.setState({
        content: res.content.rendered,
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
        <TalkToUs />
        <Footer />
      </div>
    );
  }
}

export default Article;
