import { Meteor } from "meteor/meteor"
import { WebApp } from "meteor/webapp"


const UseWebApp = () => {
  // Listen to incoming HTTP requests (can only be used on the server).
  WebApp.connectHandlers.use('/meteor', (req, res, next) => {
    console.log("url:", req.originalUrl)
    res.writeHead(200);
    res.end(`Hello world from: ${Meteor.release}`)
  });
}


export default UseWebApp