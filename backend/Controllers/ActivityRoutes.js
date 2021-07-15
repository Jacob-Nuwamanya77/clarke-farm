const express = require('express');

const router = express.Router();
const uploads = require('../shared/multer')();
const Activity = require('../Models/activityModel');

router.get('/', async (req, res) => {
  try {
    const activities = await Activity.find({});
    res.send(activities);
  } catch (error) {
    console.log(error);
  }
});

router.post('/', uploads.single('file'), async (req, res) => {
  try {
    const { filename } = req.file;
    const data = { ...req.body, filename };
    const activity = await Activity(data);
    activity.save();
  } catch (error) {
    console.log(error);
    res.status(400).send('Something went wrong with the upload');
  }
});

module.exports = router;
