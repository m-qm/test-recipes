import React, {Component} from 'react';
import './Ingredients.css';

export default class Ingredients extends Component {
  render () {
    return <div className="ingredients">{this.props.ingredients}</div>;
  }
}
