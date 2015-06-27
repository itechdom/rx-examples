var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');

//app.use(bodyParser.json());

app.post('/',function(req,res) {

    var file = fs.createWriteStream('slides.json');
    //req.on('data',function(data){
    req.pipe(file);
    res.end("I have written the data");
    //});

    //write the slides.json to the slides.json
    //var sbody = JSON.stringify(req.body);
    //
    //fs.writeFile('slides.json', sbody , function (err) {
    //    if (err) return console.log(err);
    //    res.send("slides have been written");
    //});
});
//TODO: submit the code and get correct or not correct
app.post('/code',function(req,res) {

});

var server = app.listen(4000,function(){
    console.log("app is listenting on port 4000");
});