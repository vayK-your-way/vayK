const express = require('express');
const router = express.Router();
import cookieController from '../controllers/cookieController';

router.post(
  '/add', //cookieController to verify there is a cookie stored in the user's browser, //userController to add listing to user's starred list, (req, res) =>
  res.status(200).json(),
);

module.exports = router;
