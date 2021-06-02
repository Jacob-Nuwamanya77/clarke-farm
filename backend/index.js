// IMPORTING DEPENDENCIES
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
app.use(cors());

// MANIPULATE DATABASE USING JSON
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// ESTABLISHING DATABASE CONNECTION
mongoose.connect(process.env.DATABASE, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection
  .on('open', () => {
    console.log('Mongoose connection open');
  })
  .on('error', (error) => {
    console.log(`Connection error: ${error.message}`);
  });

// HANDLING NON-EXISTING ROUTES
app.get('*', (req, res) => {
  res.send('Error! Did not find that resource!');
});

// SERVER LISTENING TO REQUESTS
app.listen(3000, () => {
  console.log('listening on port 3000');
});
