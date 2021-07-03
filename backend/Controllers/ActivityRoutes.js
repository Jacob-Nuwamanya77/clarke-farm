const express = require('express');

const router = express.Router();
const path = require('path');
const { encodeBinaryImage } = require('../shared/binary-image');
const uploads = require('../shared/multer')('activities');
const Activity = require('../models/activityModel');

router.get('/', async (req, res) => {
  try {
    const activities = await Activity.find({});
    const data = [];
    activities.forEach((entry) => {
      const img = `data:image/${entry.img.contentType};base64,${entry.img.data.toString('base64')}`;
      const activity = {
        title: entry.title,
        description: entry.description,
        priced: entry.priced,
        currency: entry.currency,
        cost: entry.cost,
        img,
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
    const imgpath = path.join(__dirname, `../uploads/activities/${req.file.filename}`);
    const img = {
      data: encodeBinaryImage(imgpath),
      contentType: req.file.mimetype.substr(6),
    };
    const data = { ...req.body, img };
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

// FIND ACTIVITY BY ID
router.get('/activities/:id', async (req, res) => {
  try {
    const activity = await Activity.findOne({ _id: req.params.id }, req.body);
    res.json(activity);
  } catch (error) {
    res.status(400).send('Unable to find the record in the list');
  }
});

module.exports = router;
