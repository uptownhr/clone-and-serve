var express = require('express'),
    open = require('open')

var app = express()


app.use(function(req,res,next){
  if (/.*\.svgz/.test(req.path)) {
      res.setHeader('Content-Encoding', 'gzip')
  }
  next();
});
app.use(express.static('www.demandmedia.com'));

app.listen(9999, function(){
    open('http://localhost:9999')
});
