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


absolutePath2 = __dirname + "/public"

app.use(
   "/public",  express.static(absolutePath2)
)

function get_data(req, res){
    res.json({
        "message" : "Hello json"
    })
}

app.get('/' , file)
app.get('/json', get_data)





























 module.exports = app;
