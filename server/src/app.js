const express = require('express')
const app = express()
const port = 3001;

var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
// app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
//   extended: true
// }));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


const history = Array();


app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.get('/recv', function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(history));
})

app.post('/send', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  
  console.log(req.body);

  let message = {
    username: req.body.username,
    message: req.body.message,
    key: history.length + 1,
  };

  let len = history.push(message);
  let status = {
    status: 'OK',
    size: len,
  };

  res.send(JSON.stringify(status));
});

app.listen(port, function () {
  console.log('Example app listening on port ' + port)
});


