import React, { Component } from 'react'


class Label extends Component {
  state = {
    hasLactose : false
  }
  
  displayLabel() {
    if(this.props.data.indexOf('cheese')) {
      console.log(this.props.data.indexOf('cheese'))
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