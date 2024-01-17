const userDB = require('../models/userModel.js');
const starController = {};

starController.addStar = (req, res, next) => {
  const { name, price, location, picture_link, check_in, check_out } = req.body;
  //check how cookies get set/sent, should it be res?
  const user_id = req.cookies.vayk_cookie;
  userDB
    .query(
      `INSERT INTO StarredListings VALUES (${user_id}, ${name}, ${price}, ${location}, ${picture_link}, ${check_in}, ${check_out}`,
    )
    .then(() => next())
    .catch((err) =>
      next({
        log: `starController add star error: ${err}`,
        message: 'add star error',
        status: 500,
      }),
    );
};

starController.getAllStars = (req, res, next) => {
  if (!req.cookies.vayk_cookie) return res.status(200).json('no listings yet');
  const user_id = req.cookies.vayk_cookie;
  userDB
    .query(`SELECT * FROM StarredListings WHERE user_id = ${user_id}`)
    .then((results) => {
      res.locals.listings = results.rows;
      return next();
    })
    .catch((err) =>
      next({
        log: `starController get all stars error: ${err}`,
        message: 'get all star error',
        status: 500,
      }),
    );
};

// userDB
//   .query(
//     "INSERT INTO StarredListings (user_id, name, price, location, picture_link, check_in, check_out) VALUES (1, 'test', 100.00, 'test', 'test', '2024-01-17', '2024-01-18')",
//   )
//   .then((results) => console.log(results));

// userDB
//   .query('SELECT * FROM StarredListings WHERE user_id = 1')
//   .then((results) => console.log(results));

module.exports = starController;
