const express = require('express');

// eslint-disable-next-line import/no-unresolved
const Accomodation = require('../Models/accommodationModel');

// Creating a Router
const router = express.Router();

// ADD ACCOMODATION TO ACCOMODATIONS TABLE
router.post('/accomodations/add', async (req, res) => {
  try {
    const newAccomodation = new Accomodation(req.body);
    await newAccomodation.save()
      .then(() => res.json('Accomodation Added'));
  } catch (error) {
    console.error(error);
    res.json('Unsuccessful! Please Try Again');
  }
});

// FIND ALL ACCOMODATIONS
router.get('/accommodations', async (req, res) => {
  try {
    const accomodations = await Accomodation.find();
    res.json(accomodations);
  } catch (error) {
    res.status(400).send('Unable to find records');
  }
});
module.exports = router;
