import React, { Component } from 'react';
import './Image.css'
import * as Utils from '../utils'


export default class Image extends Component {
 render(){

    return <div className="image-meal" style={{
                backgroundImage: this.props.source
                  ? 'url(' +
                    Utils.getImageUrl(this.props.source) +
                    ')'
                  : ''
              }}/>;
}
}