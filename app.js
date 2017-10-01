const express = require('express')
const app = express()

var bodyParser = require('body-parser')
// app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

const history = Array();


app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.post('/', (req, res) => {
  console.log("post");
  console.log(req.body);
  // console.log(req.body);
  let message = {
    username: req.body.username,
    message: req.body.message,
  };

  let len = history.push(message);
  let status = {
    status: 'OK',
    size: len,
  };

  res.send(JSON.stringify(status));
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});


