let express = require('express');
let app = express();

console.log('Hello World')

function hi (req, res) {
    res.send('Hello Express');
  }

app.get("/", hi)



































 module.exports = app;
