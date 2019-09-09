import { Meteor } from 'meteor/meteor'
import text from '../ui/pages/text'


export const Pages = new Mongo.Collection('pages')


Meteor.startup(() => {
  if (Meteor.isServer) {
    // console.log(text)
    let pages = Pages.find()
    console.log(pages.count())

    Meteor.publish('pages', function publishPages() {
      return pages
    })

    if (!pages.count()) {
      const pageNumbers = Object.keys(text)
      console.log(pageNumbers)

      pageNumbers.forEach( pageNumber => {
        const pageData = text[pageNumber]
        Pages.insert( pageData )
      })
    }
  }

})
