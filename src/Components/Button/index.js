import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './Button.css';
import classNames from 'classnames';

class Button extends Component {
  static propTypes = {
    onClick: PropTypes.func,
    content: PropTypes.node,
    primary: PropTypes.bool,
    secondary: PropTypes.bool,
    disabled: PropTypes.bool,
  };

  static defaultProps = {
    onClick: null,
    primary: false,
    secondary: false,
    disabled: false,
  };

  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  shouldComponentUpdate(nextProps) {
    return Object.keys(nextProps).some(
      key => nextProps[key] !== this.props[key]
    );
  }

  onClick(event) {
    const { onClick, disabled } = this.props;
    if (onClick && !disabled) {
      onClick(event, Object.assign({}, this.props));
    }
  }

  getClasses() {
    return Object.assign({}, this.props.extraClassNames, {
      btn: true,
      'btn-primary': this.props.primary,
      'btn-secondary': this.props.secondary,
      disabled: this.props.disabled,
    });
  }

  render() {
    const { primary, secondary, content } = this.props;
    const classes = this.getClasses();

    return (
      <button className={classNames(classes)} onClick={this.onClick}>
        {content}
      </button>
    );
  }
}

export default Button;
