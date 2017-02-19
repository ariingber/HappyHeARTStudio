var express = require('express')
var app = express()
var path    = require("path");

var port = process.env.PORT || 4000;
var server = app.listen(port);

app.use(express.static(path.join(__dirname, './public/')));


app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
  //__dirname : It will resolve to your project folder.
});
