var express = require('express')
var app = express()

app.use(express.static(`${__dirname}/client/dist/`));
app.get('/products/:id', function (req, res) {
  // app.use(express.static(`${__dirname}/client/dist`));
  res.sendFile(`${__dirname}/client/dist/index.html`);
})





app.listen(3000)
