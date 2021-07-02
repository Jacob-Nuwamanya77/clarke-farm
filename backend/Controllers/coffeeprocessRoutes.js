const express = require('express');
const CoffeeProcess = require('../models/coffeeprocessModel');

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

// FIND ALL COFFEE PROCESS
router.get('/coffee-processes', async (req, res) => {
  try {
    const coffeeProcesses = await CoffeeProcess.find();
    res.json(coffeeProcesses);
  } catch (error) {
    res.status(400).send('Unable to find records');
  }
});

module.exports = router;
