import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './Quote.css';

class Quote extends Component {
  static propTypes = {
    quote: PropTypes.string,
    pic: PropTypes.string,
    name: PropTypes.string,
    role: PropTypes.string,
  };

  static defaultProps = {
    quote:
      'Alkemics offers an intuitive solution that automates the exchange of information between retailers and brands and allows us to broadcast our product sheet updates in real-time.',
    pic:
      'http://www.techalkemics.odns.fr/wp-content/uploads/2017/07/user-2.png',
    name: 'Benjamin Coyot',
    role: 'E-Merchandising Manager, AuchanDrive',
  };
  render() {
    const { quote, pic, name, role } = this.props;
    return (
      <div className="QuoteBlock">
        <div className="QuoteBlock__content">
          <p className="Quote">
            {quote}
          </p>
          <div className="Quote Quote__Quoter">
            <img src={pic} />
            <div className="Quote__Quoter__Content">
              <p className="Quote__Name">
                {name}
              </p>
              <p className="Quote__Role">
                {role}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Quote;
