const express = require('express');

const numbers_Api = require('./controllers/numbers_Api');

const app = express();

app.use(express.json());

app.use('/numbers', numbers_Api);

let port = process.env.PORT || 3300;

app.listen(port, console.log(`Server Started on port: ${port} \u{1F525}\u{1F680}`));
