const express = require('express');
const router = express.Router();
import cookieController from '../controllers/cookieController';
import starController from '../controllers/starController';

router.post('/add', cookieController.verifyCookie, starController.addStar, (req, res) =>
  res.status(200).json('star added!'),
);

router.get('/getListings', starController.getAllStars, (req, res) =>
  res.status(200).json(res.locals.listings),
);

module.exports = router;
