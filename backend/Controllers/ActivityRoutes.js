const express = require('express');

const router = express.Router();
const uploads = require('../shared/multer')('activities');
const Activity = require('../Models/activityModel');

router.get('/', async (req, res) => {
  try {
    const activities = await Activity.find({});
    const data = [];
    activities.forEach((entry) => {
      const activity = {
        title: entry.title,
        description: entry.description,
        priced: entry.priced,
        currency: entry.currency,
        cost: entry.cost,
      };
      data.push(activity);
    });
    res.send(data);
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

router.put('/update-activity/:id', async (req, res) => {
  try {
    await Activity.findOneAndUpdate({ _id: req.params.id }, req.body,
      (err) => {
        if (err) res.send(err);
        res.json('Activity Updated');
      });
  } catch (error) {
    res.status(400).send('Unable to update the record from the database');
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
