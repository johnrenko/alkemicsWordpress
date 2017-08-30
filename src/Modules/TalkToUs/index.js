import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Button from '../../Components/Button';

import './TalkToUs.css';

class TalkToUs extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      sent: false,
    };
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.postForm = this.postForm.bind(this);
    this.onClickSend = this.onClickSend.bind(this);
  }

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

  onChangeName(e) {
    this.setState({
      name: e.target.value,
    });
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }

  onClickSend() {
    this.state.name === '' || this.state.email === ''
      ? null
      : this.postForm(this.state.name, this.state.email);
    this.setState({
      name: '',
      email: '',
      send: true,
    });
    setTimeout(
      () =>
        this.setState({
          send: false,
        }),
      3000
    );
  }

  renderButton() {
    return this.state.send ? (
      <Button content="Sent" onClick={this.onClickSend} disabled />
    ) : (
      <Button content="->" onClick={this.onClickSend} primary />
    );
  }

  render() {
    return (
      <div className="TalkToUs">
        <h1>Talk to Us!</h1>
        <div className="TalkToUs__name">
          <input
            placeholder="Name"
            onChange={this.onChangeName}
            value={this.state.name}
          />
        </div>
        <div className="TalkToUs__email">
          <input
            placeholder="E-mail"
            onChange={this.onChangeEmail}
            value={this.state.email}
          />
        </div>
        <div className="TalkToUs__button">{this.renderButton()}</div>
      </div>
    );
  }
}

export default TalkToUs;
