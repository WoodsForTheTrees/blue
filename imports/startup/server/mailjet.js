// mailjet.js //

const mailjet = require ( 'node-mailjet' )
                .connect( '663f8858a6673ee8e7135d00f36a11dd'
                        , 'a21e6ea2594fb2ffdb8cab12f740f6ed' )

let idSeed  = "#"
let counter = 1

function getID() {
  let id = "" + counter++
  let zeros = Math.max(10 - id.length, 0)
  let padding = ""

  while (zeros--) {
    padding += "0"
  }

  return idSeed + padding + id
}



function sendMessage ({
  from    = { "Email": "james@lexogram.com", "Name": "James" }
, to      = [{ "Email": "james@lexogram.com", "Name": "James" }]
, subject = "New connection"
, text    = ""
, html    = "HTML"
, id      = getID()
}) {
  const request = mailjet
  .post("send", {'version': 'v3.1'})
  .request({
    "Messages": [
      { "From":     from
      , "To":       to
      , "Subject":  subject
      , "TextPart": text
      , "HTMLPart": html
      , "CustomID": id
      }
    ]
  })
  request
    .then((result) => {
      result = (JSON.parse(JSON.stringify(result)))
      result = result.response.req.data.Messages[0]
      result = result.Subject + ": " + result.HTMLPart
      console.log(result)
    })
    .catch((err) => {
      console.log(err.statusCode)
    })
}


export default sendMessage