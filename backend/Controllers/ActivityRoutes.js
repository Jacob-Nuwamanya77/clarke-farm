const express = require('express');
const Activity = require('../Models/activityModel');

// Creating a Router
const router = express.Router();

// ADD ACTIVITY TO ACTIVITIES TABLE.
router.post('/activities/add', async (req, res) => {
  try {
    const newActivity = new Activity(req.body);
    await newActivity.save()
      .then(() => res.json('Activity Added'));
  } catch (error) {
    console.error(error);
    res.json('Unsuccessful! Please Try Again');
  }
});

module.exports = router;
