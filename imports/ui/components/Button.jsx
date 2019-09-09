import React, { Component } from 'react'



export default class Button extends Component {
  constructor() {
    super()
    this.choose = this.choose.bind(this)
  }


  choose() {
    this.props.action(this.props.page)
  }


  render() {
    return (
      <button
        onClick={this.choose}
      >
        {this.props.text}
      </button>
    )
  }
}