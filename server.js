var express = require('express')
var app = express()
var path    = require("path");

app.use(express.static(path.join(__dirname, './public/')));


app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
  //__dirname : It will resolve to your project folder.
});


app.listen(4000, function () {
  console.log('Booyah')
})
