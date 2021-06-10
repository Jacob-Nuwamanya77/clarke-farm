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
module.exports = router;
