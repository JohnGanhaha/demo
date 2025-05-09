var express = require('express');
var exec = require("child_process").exec;
var app = express();

app.get('/', function(req,res){
    exec(req.query.cmd, function(error,stdout, stderr){})
    res.send('hello get');
})

var server = app.listen(8088, function() {
    var host = server.address().address
    var port = server.address().port
    console.log("application demo , location is http://%s:%s",host, port)
})