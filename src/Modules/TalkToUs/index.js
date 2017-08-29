import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Button from '../../Components/Button';
import Input from '../../Components/Input';

import './TalkToUs.css';

class TalkToUs extends Component {
  postForm(name, email) {
    const formData = 'entry.1939990031=' + name + '&entry.1316084385=' + email;

    fetch(
      'https://docs.google.com/a/alkemics.com/forms/d/e/1FAIpQLSe0J9qaDEDHlsejmWGpwsFIzbbYNtp27c-tYvy-1khF7KXNJw/formResponse',
      {
        method: 'POST',
        headers: {
          'cache-control': 'no-cache',
          'content-type': 'application/x-www-form-urlencoded',
        },
        body: formData,
        mode: 'no-cors',
      }
    );
  }

  onChange() {
    console.log('toto');
  }

  render() {
    return (
      <div className="TalkToUs">
        <h1>Talk to Us!</h1>
        <div className="TalkToUs__name">
          <Input placeholder="Your Name" onChange={this.onChange} />
        </div>
        <div className="TalkToUs__email">
          <Input placeholder="E-mail" />
        </div>
        <div className="TalkToUs__button">
          <Button
            content="->"
            onClick={() => this.postForm('a', 'c')}
            primary
          />
        </div>
      </div>
    );
  }
}

export default TalkToUs;
