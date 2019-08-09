import React, { Component } from 'react';
// import './I.scss'

export default class Ingredients extends Component {
 render(){
  return( <div className="ingredients">{this.props.ingredients}</div> )
 }
}