import React, { Component } from 'react';

export default class Ingredients extends Component {
 render(){
  return( <div className="ingredients">{this.props.ingredients}</div> )
 }
}