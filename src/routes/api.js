const express = require('express');
const router = express.Router();
import hotelController from '../controllers/hotelController';
import airbnbController from '../controllers/airbnbController';

//get data from hotel api
router.get('/hotel-info', hotelController.getGeoID, hotelController.searchHotels, (req, res) =>
  res.status(200).json(res.locals.hotelData),
);

router.get('/airbnb-info', airbnbController.getGeoID, airbnbController.searchAirbnb, (req, res) =>
  res.status(200).json(res.locals.airbnbData),
);

module.exports = router;
