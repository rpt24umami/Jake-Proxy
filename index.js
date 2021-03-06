
var express = require('express')
var app = express()
//var expressStaticGzip = require('express-static-gzip');
app.use(express.static(`${__dirname}/client/dist/`));
//app.use('/', expressStaticGzip(`${__dirname}/client/dist/`), {
// enableBrotli: true
//});
app.get('/products/:id', function (req, res) {
  // app.use(express.static(`${__dirname}/client/dist`));
  res.sendFile(`${__dirname}/client/dist/index.html`);
})

app.get('*.js', function (req, res, next) {
  req.url = req.url + '.gz';
  res.set('Content-Encoding', 'gzip');
  next();
});


app.listen(3000)
