const express = require('express');

const Training = require('../Models/trainingModel');

// Creating a Router
const router = express.Router();

// ADD TRAINING TO TRAININGS TABLE
router.post('/trainings/add', async (req, res) => {
  try {
    const newTraining = new Training(req.body);
    await newTraining.save()
      .then(() => res.json('Training Added'));
  } catch (error) {
    console.error(error);
    res.json('Unsuccessful! Please Try Again');
  }
});
module.exports = router;
