const
  express = require('express'),
  http = require('http');

var app = express();
app.use(express.static(__dirname + '/'));
app.all('*', (req, res) => {
  res.send('index.html');
});

app.listen(9000, () => {
  console.log('Running');
});