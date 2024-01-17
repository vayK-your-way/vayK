const express = require('express');
const router = express.Router();
const hotelController = require('../controllers/hotelController');
const airbnbController = require('../controllers/airbnbController');

//get data from hotel api
router.get('/hotel-info', hotelController.getGeoID, hotelController.searchHotels, (req, res) =>
  res.status(200).json(res.locals.hotelData),
);

//data data from airbnb api
router.get('/airbnb-info', airbnbController.searchAirbnb, (req, res) =>
  res.status(200).json(res.locals.airbnbData),
);

module.exports = router;
