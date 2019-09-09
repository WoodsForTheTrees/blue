import React, { Component } from 'react'
import ReactDOM from 'react-dom';



export default class CustomOption extends Component {
  constructor() {
    super()
    this.choose = this.choose.bind(this)
  }


  choose(event) {
    const input = ReactDOM.findDOMNode(this.refs.input).value.trim()
    this.props.action(input)
  }


  render() {
    return (
      <div>
        <p>{this.props.prompt}</p>
        <textarea
          ref="input"
          placeholder={this.props.placeholder}
        ></textarea>
        <button
          onClick={this.choose}
        >
          {this.props.buttonText}
        </button>
      </div>
    )
  }
}