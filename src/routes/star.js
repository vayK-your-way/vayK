const express = require('express');
const router = express.Router();

router.post('/add', (req, res) => {
  res.status(200).json()
});
//cookieController to verify there is a cookie stored in the user's browser, //userController to add listing to user's starred list, (req, res) =>


module.exports = router;
