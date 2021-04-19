// Importing dependencies
const express = require("express");
const db = require("../config");
const Review = db.reviews;

// Creating a Router
const router = express.Router();

// ADD USER TO USER'S TABLE
router.post("/reviews/add", async (req, res) => {
  try {
    const newReview = new Review(req.body);
    await newReview.save()
      .then(() => res.json('Review Added'));
  }
  catch (error) {
    console.error(error)
    res.json('Unsuccessful! Please Try Again')
  }
})

// FIND ALL REVIEWS
router.get("/reviews", async (req, res) => {
  Review.findAll()
    .then(reviews => res.json(reviews))
    .catch(error => res.json(error))
});

// SEARCH REVIEW e.g '/search-review?packageId=2' will retrieve review with packageId 2
router.get('/search-review', async (req, res) => {
  Review.findAll({ where: { packageId: req.query.packageId } })
    .then(review => res.json(review))
    .catch(error => res.json(error))
});

//
module.exports = router;