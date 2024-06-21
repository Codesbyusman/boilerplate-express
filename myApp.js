require('dotenv').config()

let express = require('express');
const { path } = require('express/lib/application');
const req = require('express/lib/request');
let app = express();

bodyParser = require('body-parser')


console.log('Hello World')

absolutePath = __dirname + '/views/index.html'
console.log(absolutePath)

// app.use( function middleware(req, res, next) { 
//     console.log("I'm a middlewear...")
//     // Call the next function in line:
//     next(
//         console.log("I'm a next.. will log you..."),
//         console.log(req.method+ " " + req.path + " - " + req.ip)
//     );
//   }
// );

app.use(bodyParser.urlencoded({extended: false}))


app.get('/now', function(req, res, next){
    req.time = new Date().toString()
    next();
},
function(req, res, next){
    console.log(req.time)
    res.send({time: req.time})
}
);


function hi (req, res) {
    res.send('Hello Express');
}

function file (req, res) {
    res.sendFile(absolutePath);
}


// absolutePath2 = __dirname + "/public"

// app.use(
//    "/public",  express.static(absolutePath2)
// )

function get_data(req, res){
    if(process.env.MESSAGE_STYLE == 'uppercase'){
        res.json({
            "message" : "HELLO JSON"
        })
    }
    else{
        res.json({
            "message" : "Hello json"
        })
    }
    
}

app.get('/' , file)
app.get('/json', get_data)

// function next(req, res){
//     console.log("I am next function")
// }

// function mycustom_middleware(req, res, next){
//     console.log("I'm a middleware...");
//     next(
//         console.log("I'm a middleware...")  
//     );
// }




// absolutePath2 = __dirname + "/public"

// app.use(
//    "/public",  express.static(absolutePath2)
// )


app.get('/:word/echo', function(req, res, next){
    res.send({echo: req.params.word})
})

app.post('/name' , function(req, res)
{
    var fname = req.body.first;
    var lname = req.body.last;

    res.json({
        name: `${fname} ${lname}`
    })
})


















 module.exports = app;
