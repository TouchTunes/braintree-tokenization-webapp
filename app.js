const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

  // Hard code the client token
const clientToken = process.env.BRAINTREE_CLIENT_TOKEN;

// Serve the client token via an endpoint
app.get('/client_token', (req, res) => {
  res.json({ clientToken });
});


app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
