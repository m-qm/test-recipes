import React, { Component } from 'react';
import './Image.scss'
export default class Image extends Component {
 render(){
  return( <img src={this.props.source} alt={this.props.text} className="image-meal"/> )
 }
}