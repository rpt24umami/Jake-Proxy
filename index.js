var express = require('express')
var app = express()
app.use(express.static(`${__dirname}/client/dist`));
app.get('/', function (req, res) {
  app.use(express.static(`${__dirname}/client/dist`));
})

app.listen(3000)