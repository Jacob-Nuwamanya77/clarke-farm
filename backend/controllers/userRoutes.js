// Importing dependencies
const express = require("express");
const db = require("../config");
const User = db.users;

// Creating a Router
const router = express.Router();

// ADD USER TO USER'S TABLE
router.post("/users/add", async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save()
      .then(() => res.json('User Added'));
  }
  catch (error) {
    console.error(error)
    res.json('Unsuccessful! Please Try Again')
  }
})

// FIND ALL USERS
router.get("/users", async (req, res) => {
  User.findAll()
    .then(users => res.json(users))
    .catch(error => res.json(error))
});

// FIND USER BY ID
router.get('/users/:id', async (req, res) => {
  User.findByPk(req.params.id)
    .then(user => res.json(user))
    .catch(error => res.json(error))
});

// SEARCH USER e.g '/search-user?name=stephen' will retrieve stephen
router.get('/search-user', async (req, res) => {
  User.findAll({ where: { name: req.query.name } })
    .then(user => res.json(user))
    .catch(error => res.json(error))
});

// UPDATE USER

/* METHOD 1: Update User password; --the hard coded style */
/*
router.post('/update-user/:id', async (req, res) => {
  User.findByPk(req.params.id).then((user) => {
    user.update({
      'password': 'new-password'
    })
      .then(() => res.json('User Updated'));
  });
})
*/

/* METHOD 2: Dynamically Update User password */
router.post("/update-user/:id", async (req, res) => {
  try {
    User.findByPk(req.params.id).then((user) => {
      user.password = req.body.password;

      user.save()
        .then(() => res.json('User Updated'));
    })
  }
  catch (error) {
    console.error(error)
    res.json('Unsuccessful! Please Try Again')
  }
})

// DELETE USER
router.get('/delete-user/:id', async (req, res) => {
  User.findByPk(req.params.id).then((user) => {
    user.destroy();
  })
    .then(() => res.json('User Deleted'));
});

//
module.exports = router;