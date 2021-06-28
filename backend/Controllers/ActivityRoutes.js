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

// FIND ALL ACTIVITIES
router.get('/activities', async (req, res) => {
  try {
    const activities = await Activity.find();
    res.json(activities);
  } catch (error) {
    res.status(400).send('Unable to find records');
  }
});

// DELETE ACTIVITY
router.get('/delete-activity/:id', async (req, res) => {
  try {
    await Activity.deleteOne({ _id: req.params.id });
    res.json('Activity Deleted');
  } catch (error) {
    res.status(400).send('Unable to delete the record from the database');
  }
});

module.exports = router;
