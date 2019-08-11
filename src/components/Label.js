import React, { Component } from 'react'


class Label extends Component {
  state = {
    hasLactose : false
  }
  
  displayLabel() {

    if(this.props.data.indexOf('cheese') > -1) {
      this.setState({
        hasLactose: true
      })
    }
    if(this.props.data.indexOf('milk') > -1) {
      this.setState({
        hasLactose: true
      })
    }
  }

  componentDidMount() {
    this.displayLabel()
  }

  render() {

    return (
      this.state.hasLactose ?    
      <div className="label-container">
        <div className="label-title">Has lactose</div>
      </div> :
      ''
    )
  }
}
export default Label;