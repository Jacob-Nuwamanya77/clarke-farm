const express = require('express');
const CoffeeProcess = require('../Models/coffeeprocessModel');

// Creating a Router
const router = express.Router();

// ADD CoffeeProcess TO coffeeProcesses TABLE
router.post('/coffee-processes/add', async (req, res) => {
  try {
    const newCoffeeProcess = new CoffeeProcess(req.body);
    await newCoffeeProcess.save()
      .then(() => res.json('CoffeeProcess Added'));
  } catch (error) {
    console.error(error);
    res.json('Unsuccessful! Please Try Again');
  }
});

module.exports = router;
