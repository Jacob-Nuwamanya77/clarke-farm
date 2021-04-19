// Importing dependencies
const express = require("express");
const db = require("../config");
const Package = db.packages;

// Creating a Router
const router = express.Router();

// ADD PACKAGE TO PACKAGE'S TABLE
router.post("/packages/add", async (req, res) => {
  try {
    const newPackage = new Package(req.body);
    await newPackage.save()
      .then(() => res.json('Package Added'));
  }
  catch (error) {
    console.error(error)
    res.json('Unsuccessful! Please Try Again')
  }
})

// FIND ALL PACKAGES
router.get("/packages", async (req, res) => {
  Package.findAll()
    .then(packs => res.json(packs))
    .catch(error => res.json(error))
});

// FIND PACKAGE BY ID
router.get('/packages/:id', async (req, res) => {
  Package.findByPk(req.params.id)
    .then(pack => res.json(pack))
    .catch(error => res.json(error))
});

// SEARCH PACKAGE e.g '/search-package?packageName=Corporate' will retrieve Corporate
router.get('/search-package', async (req, res) => {
  Package.findAll({ where: { packageName: req.query.packageName } })
    .then(pack => res.json(pack))
    .catch(error => res.json(error))
});

// UPDATE PACKAGE

/* METHOD 1: Update Package name; --the hard coded style */
/*
router.post('/update-package/:id', async (req, res) => {
  Package.findByPk(req.params.id).then((pack) => {
    pack.update({
      'packageName': 'new-package-name'
    })
      .then(() => res.json('Package Updated'));
  });
})
*/

/* METHOD 2: Dynamically Update Package name */
router.post("/update-package/:id", async (req, res) => {
  try {
    Package.findByPk(req.params.id).then((pack) => {
      pack.packageName = req.body.packageName;

      pack.save()
        .then(() => res.json('Package Updated'));
    })
  }
  catch (error) {
    console.error(error)
    res.json('Unsuccessful! Please Try Again')
  }
})

// DELETE PACKAGE
router.get('/delete-package/:id', async (req, res) => {
  Package.findByPk(req.params.id).then((pack) => {
    pack.destroy();
  })
    .then(() => res.json('Package Deleted'));
});

//
module.exports = router;