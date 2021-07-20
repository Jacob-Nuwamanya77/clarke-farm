const express = require('express');
const coffeeReviews = require('../Models/reviewModel')('coffeeReviews');
const visitorReviews = require('../Models/reviewModel')('visitorReviews');
const visitorModel = require('../Models/visitorModel');
const coffeeOrderModel = require('../Models/coffeeOrderModel');

const router = express.Router();

router.post('/visitor', async (req, res) => {
  try {
    visitorModel.find({ email: req.body.email }).exec(async (err, response) => {
      if (response.length > 0) {
        const review = await visitorReviews(req.body);
        review.save().then(() => res.json({ status: 'success' }));
      } else {
        res.json({ status: 'rejected' });
      }
    });
  } catch (error) {
    console.log(error);
  }
});

router.post('/coffee', async (req, res) => {
  try {
    coffeeOrderModel.find({ email: req.body.email }).exec(async (err, response) => {
      if (response.length > 0) {
        const review = await coffeeReviews(req.body);
        review.save().then(() => res.json({ status: 'success' }));
      } else {
        res.json({ status: 'rejected' });
      }
    });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
