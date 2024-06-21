let express = require('express');
const { path } = require('express/lib/application');
let app = express();

console.log('Hello World')

absolutePath = __dirname + '/views/index.html'
console.log(absolutePath)
function hi (req, res) {
    res.send('Hello Express');
  }

  function file (req, res) {
    res.sendFile(absolutePath);
  }


app.get("/", file)

































 module.exports = app;
