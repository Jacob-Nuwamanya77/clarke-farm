// IMPORTING DEPENDENCIES
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// APP ROUTES
const visitorRouter = require('./Controllers/visitorRoutes');
const activityRouter = require('./Controllers/activityRoutes');
const accomodationRouter = require('./Controllers/accommodationRoutes');
const coffeeprocessRouter = require('./Controllers/coffeeprocessRoutes');
const trainingRouter = require('./Controllers/trainingRoutes');
const tasksRouter = require('./Controllers/tasksRoutes');

app.use('/api/activities', activityRouter);
app.use('/api/tasks', tasksRouter);
app.use('/api/guests', visitorRouter);
app.use(accomodationRouter);
app.use(coffeeprocessRouter);
app.use(trainingRouter);

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

// SERVER LISTENING TO REQUESTS
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server Running on port ${port}`);
});
