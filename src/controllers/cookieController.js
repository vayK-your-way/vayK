const userDB = require('../models/userModel.js');
const cookieController = {};

cookieController.verifyCookie = (req, res, next) => {
  if (!req.cookies.vayk_cookie) {
    let userID;
    userDB
      .query('SELECT cookie_id FROM Users ORDER BY cookie_id DESC LIMIT 1')
      .then((result) => {
        userID = result.rows[0].cookie_id + 1;
        return userDB.query(`INSERT INTO Users VALUES (${userID})`);
      })
      .then(() => {
        //should we be setting the cookie on the req instead?
        res.cookie('vayk_cookie', userID, { httpOnly: true });
        return next();
      })
      .catch((err) =>
        next({
          log: `cookieController error: ${err}`,
          message: 'verify cookie error',
          status: 500,
        }),
      );
  } else return next();
};

module.exports = cookieController;
