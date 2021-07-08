const express = require('express');

const router = express.Router();
const Task = require('../Models/tasksModel');

router.get('/', async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.send(tasks);
  } catch (error) {
    console.log(error);
  }
});

router.post('/', async (req, res) => {
  try {
    const task = await Task(req.body);
    task.save();
    res.send(req.body);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
