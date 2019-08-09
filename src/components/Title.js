import React, { Component } from 'react';
import './Title.scss'

export default class Title extends Component {
 render(){
  return( <h2 className="title">{this.props.title}</h2> )
 }
}