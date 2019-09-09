import { Meteor } from 'meteor/meteor';

import React, { Component } from 'react'
import { withTracker } from 'meteor/react-meteor-data';

import { Pages } from '../../api/pages' // mongo collection
import { hash } from '../../api/utilities'
import Button from './Button'
import CustomOption from './CustomOption'


class Page extends Component {
  // this.props will be
  // { pages: 

  //   { _id:        <unique>
  //   , pageNumber: <string>
  //   , paragraphs: [ <p>...</p>, ...]
  //   }
  // , ...
  // ]}

  constructor() {
    super()
    this.state = { page: "001" }
    this._updatePage()
    this.choose = this.choose.bind(this )
    this.suggest = this.suggest.bind(this )
  }


  /** Called by a click on a button **
   *
   * @param   {string}    page    A string number like "003"
   */
  choose(page) {
    this.setState({ page })
  }


  suggest(suggestion) {
    console.log(suggestion)
  }


  _updatePage() {
    this.pageData = Pages.find({ pageNumber: this.state.page })
                          .fetch()
                          [0]
    // { _id:        <unique>
    // , pageNumber: <string>
    // , paragraphs: [ <p>...</p>, ...]
    // }                 
  }


  _renderParagraphs() {
    if (!this.pageData) {
      return ""
    }

    const keySeed = this.pageData._id.substring(0, 4)
    const rendu = this.pageData.paragraphs.map((paragraph, index) => {
        return (
          <p key={keySeed + "_p_" + index}>
           {paragraph}
          </p>
        )
      }
    )

    return rendu
  }


  _renderChoices() {
    if (!this.pageData) {
      return ""
    }

    let choices = this.pageData.choices

    if (!choices || !choices.length) {
      // Continue to the next page by default
      choices = [ {
        "text": "Continue"
      , "page": this._nextPageNumber()
      }]
    }

    const rendu = choices.map(
      choice => {
        if (choice.custom) {
          return this._customOption()
        } else {
          return this._pageButton(choice)
        }
      }
    )

    return rendu
  }



  _customOption() {     
    return (
      <CustomOption
        key="suggestion"
        action={this.suggest}
        prompt="Suggest another option"
        placeholder="Your suggestion..."
        buttonText="Submit suggestion"
      />
    )

  }



  _pageButton(choice) {       
    const key = "go_"
              + choice.page 
              + "_"
              + hash(choice.text + choice.page)
    return (
      <Button
        key={key}
        action={this.choose}
        page={choice.page}
        text={choice.text}
      />
    )
  }



  _nextPageNumber() {
    let pageNumber = parseInt(this.state.page, 10) + 1
    if (pageNumber < 10) {
      pageNumber = "00" + pageNumber
    } else if (pageNumber < 100) {
      pageNumber = "0" + pageNumber
    } else if (pageNumber < 100) {
      pageNumber = "" + pageNumber
    }

    return pageNumber
  }


  
  render() {
    this._updatePage()

    const rendu =
      <section>
        {this._renderParagraphs()}
        {this._renderChoices()}
      </section>
    
    return rendu
  }
}


const getMeteorData = () => {
  Meteor.subscribe('pages');

  return {
    pages: Pages.find({}).fetch()
  }
}

const wrapperFunction = withTracker(getMeteorData)

const WrappedComponent = wrapperFunction(Page)


export default WrappedComponent
