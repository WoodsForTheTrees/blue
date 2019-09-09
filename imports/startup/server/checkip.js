import { Meteor } from 'meteor/meteor';
import sendMessage from './mailjet.js'

Meteor.onConnection(function(connection) {
  const ipAddress = connection.clientAddress

  switch (ipAddress) {
    case "127.0.0.1":
    case "0.0.0.0":
    case "192.168.1.50":
      return console.log(
        `Development: don't send an email from ${ipAddress}`
      )

    default:
      sendMessage({ html: ipAddress })
  }


  Meteor.methods({
    sendMessage: (message) => {
      message.html = message.subject
                   ? message.subject + ` (${ipAddress})`
                   : `(from ${ipAddress})`
      sendMessage(message)
    }
  })

});
