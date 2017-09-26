import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './HeaderAction.css';

class HeaderAction extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.state = {
      button_1: 'en',
      button_2: 'Talk to Us',
    };
  }

  onClick() {
    this.state.button_1 == 'en'
      ? this.setState({
          button_1: 'fr',
          button_2: 'Contactez nous',
        })
      : this.setState({
          button_1: 'en',
          button_2: 'Talk to Us',
        });
  }

  scroll() {
    document.querySelector('.TalkToUs').scrollIntoView({
      behavior: 'smooth',
    });
    setTimeout(() => document.querySelector('#nameTalkToUs').focus(), 800);
  }

  render() {
    const { button_1, button_2 } = this.state;
    return (
      <div className="headerAction">
        <a className="language" onClick={this.onClick}>
          {button_1}
        </a>
        <a className="" onClick={this.scroll}>
          {button_2}
        </a>
      </div>
    );
  }
}

export default HeaderAction;
