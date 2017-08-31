import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './Quote.css';

class Quote extends Component {
  static propTypes = {
    quote: PropTypes.string,
    pic: PropTypes.string,
    name: PropTypes.string,
    role: PropTypes.string,
    bg: PropTypes.bool,
  };

  static defaultProps = {
    bg: true,
  };

  render() {
    const { quote, pic, name, role, bg } = this.props;

    const backGround = bg ? 'QuoteBlock' : 'QuoteBlock generic';

    return (
      <div className={backGround}>
        <div className="QuoteBlock__content">
          <p className="Quote">{quote}</p>
          <div className="Quote Quote__Quoter">
            <img src={pic} />
            <div className="Quote__Quoter__Content">
              <p className="Quote__Name">{name}</p>
              <p className="Quote__Role">{role}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Quote;
