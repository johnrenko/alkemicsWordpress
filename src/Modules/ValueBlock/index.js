import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Button from '../../Components/Button';
import Infoblocks from '../Infoblocks';

import './valueBlock.css';

class ValueBlock extends Component {
  static propTypes = {
    blocksToRender: PropTypes.object,
    valueTitle: PropTypes.string,
    cta2: PropTypes.string,
  };

  static defaultProps = {
    blocksToRender: {
      data: [],
    },
    valueTitle: '',
    cta2: '',
  };

  render() {
    return (
      <div className="valueBlock">
        <h1>
          {this.props.valueTitle}
        </h1>
        <Infoblocks blocksToRender={this.props.blocksToRender} />
        <Button content={this.props.cta2} primary />
      </div>
    );
  }
}

export default ValueBlock;
