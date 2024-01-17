const express = require('express');
const router = express.Router();
const cookieController = require('../controllers/cookieController');
const starController = require('../controllers/starController');

router.post('/add', cookieController.verifyCookie, starController.addStar, (req, res) =>
  res.status(200).json(res.locals.star_id),
);

router.get('/getListings', starController.getAllStars, (req, res) =>
  res.status(200).json(res.locals.listings),
);

router.delete('/delete/:star_id', starController.deleteStar, (req, res) =>
  res.status(200).json('star has been deleted'),
);

module.exports = router;
