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
        <Input placeholder="Your Name" />
        <Input placeholder="E-mail" />
        <Button content="send" onClick={() => console.log('toto')} primary />
      </div>
    );
  }
}

export default TalkToUs;
