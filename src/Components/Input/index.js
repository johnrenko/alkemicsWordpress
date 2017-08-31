import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './Input.css';
import classNames from 'classnames';

class Input extends Component {
  static propTypes = {
    placeholder: PropTypes.string,
  };

  render() {
    const { placeholder } = this.props;

    return (
      <div className="input">
        <input placeholder={placeholder} />
      </div>
    );
  }
}

export default Input;
