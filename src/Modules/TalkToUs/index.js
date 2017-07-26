import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Button from '../../Components/Button';
import Input from '../../Components/Input';

import './TalkToUs.css';

class TalkToUs extends Component {
  render() {
    return (
      <div className="TalkToUs">
        <h1>Talk to Us!</h1>
        <div className="TalkToUs__name">
          <Input placeholder="Your Name" />
        </div>
        <div className="TalkToUs__email">
          <Input placeholder="E-mail" />
        </div>
        <div className="TalkToUs__button">
          <Button content="->" onClick={() => console.log('toto')} primary />
        </div>
      </div>
    );
  }
}

export default TalkToUs;
