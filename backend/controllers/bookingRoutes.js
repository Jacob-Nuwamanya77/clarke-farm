// Importing dependencies
const express = require("express");
const db = require("../config");
const Booking = db.bookings;

// Creating a Router
const router = express.Router();

// ADD BOOKING TO BOOKING'S TABLE
router.post("/bookings/add", async (req, res) => {
  try {
    const newBooking = new Booking(req.body);
    await newBooking.save()
      .then(() => res.json('Booking Added'));
  }
  catch (error) {
    console.error(error)
    res.json('Unsuccessful! Please Try Again')
  }
})

// FIND ALL BOOKINGS
router.get("/bookings", async (req, res) => {
  Booking.findAll()
    .then(bookings => res.json(bookings))
    .catch(error => res.json(error))
});

// FIND BOOKING BY ID
router.get('/bookings/:id', async (req, res) => {
  Booking.findByPk(req.params.id)
    .then(booking => res.json(booking))
    .catch(error => res.json(error))
});

// SEARCH BOOKING e.g '/search-booking?packageId=2' will retrieve booking with packageId 2
router.get('/search-booking', async (req, res) => {
  Booking.findAll({ where: { packageId: req.query.packageId } })
    .then(booking => res.json(booking))
    .catch(error => res.json(error))
});

// UPDATE BOOKING

/* METHOD 1: Update Booking checkinDate; --the hard coded style */
/*
router.post('/update-booking/:id', async (req, res) => {
  Booking.findByPk(req.params.id).then((booking) => {
    booking.update({
      'checkinDate': 'new-checkin-date'
    })
      .then(() => res.json('Booking Updated'));
  });
})
*/

/* METHOD 2: Dynamically Update Booking checkinDate */
router.post("/update-booking/:id", async (req, res) => {
  try {
    Booking.findByPk(req.params.id).then((booking) => {
      booking.checkinDate = req.body.checkinDate;

      booking.save()
        .then(() => res.json('Booking Updated'));
    })
  }
  catch (error) {
    console.error(error)
    res.json('Unsuccessful! Please Try Again')
  }
})

// DELETE BOOKING
router.get('/delete-booking/:id', async (req, res) => {
  Booking.findByPk(req.params.id).then((booking) => {
    booking.destroy();
  })
    .then(() => res.json('Booking Deleted'));
});

//
module.exports = router;