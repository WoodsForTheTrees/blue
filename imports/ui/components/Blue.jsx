import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';


export default class Blue extends Component {
  
  render() {
    return (
      <div>
        <div className="smoke"></div>
        <div className="background"></div>
        <main>
          <section id="title" className="active">
            <h2>A fairly intelligent</h2>
            <h1>Shade of Blue</h1>
          </section>
        </main>
      </div>
    );
  }
}
