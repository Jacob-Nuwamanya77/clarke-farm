// Importing dependencies
const express = require("express");
const db = require("../config");
const Visitor = db.visitors;

// Creating a Router
const router = express.Router();

// ADD VISITOR TO VISITOR'S TABLE
router.post("/visitors/add", async (req, res) => {
  try {
    const newVisitor = new Visitor(req.body);
    await newVisitor.save()
      .then(() => res.json('Visitor Added'));
  }
  catch (error) {
    console.error(error)
    res.json('Unsuccessful! Please Try Again')
  }
})

// FIND ALL VISITORS
router.get("/visitors", async (req, res) => {
  Visitor.findAll()
    .then(visitors => res.json(visitors))
    .catch(error => res.json(error))
});

// FIND VISITOR BY ID
router.get('/visitors/:id', async (req, res) => {
  Visitor.findByPk(req.params.id)
    .then(visitor => res.json(visitor))
    .catch(error => res.json(error))
});

// SEARCH VISITOR e.g '/search-visitor?name=stephen' will retrieve stephen
router.get('/search-visitor', async (req, res) => {
  Visitor.findAll({ where: { name: req.query.name } })
    .then(visitor => res.json(visitor))
    .catch(error => res.json(error))
});

// UPDATE VISITOR

/* METHOD 1: Update Visitor phone contact; --the hard coded style */
/*
router.post('/update-visitor/:id', async (req, res) => {
  Visitor.findByPk(req.params.id).then((visitor) => {
    visitor.update({
      'phone': 'new-contact'
    })
      .then(() => res.json('Visitor Updated'));
  });
})
*/

/* METHOD 2: Dynamically Update Visitor phone contact */
router.post("/update-visitor/:id", async (req, res) => {
  try {
    Visitor.findByPk(req.params.id).then((visitor) => {
      visitor.phone = req.body.phone;

      visitor.save()
        .then(() => res.json('Visitor Updated'));
    })
  }
  catch (error) {
    console.error(error)
    res.json('Unsuccessful! Please Try Again')
  }
})

// DELETE VISITOR
router.get('/delete-visitor/:id', async (req, res) => {
  Visitor.findByPk(req.params.id).then((visitor) => {
    visitor.destroy();
  })
    .then(() => res.json('Visitor Deleted'));
});

//
module.exports = router;