import React, { Component } from 'react';
import './Title.css'

export default class Title extends Component {
 render(){
  return( <h2 className="title">{this.props.title}</h2> )
 }
}