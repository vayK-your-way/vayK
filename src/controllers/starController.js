const userDB = require('../models/userModel.js');
const starController = {};

starController.addStar = (req, res, next) => {
  const { name, price, location, picture_link, check_in, check_out } = req.body;
  //check how cookies get set/sent, should it be res?
  const user_id = req.cookies.vayk_cookie;
  userDB
    .query(
      `INSERT INTO StarredListings VALUES (${user_id}, ${name}, ${price}, ${location}, ${picture_link}, ${check_in}, ${check_out} RETURNING star_id`,
    )
    .then((results) => {
      res.locals.star_id = results.rows[0].star_id;
      return next();
    })
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

starController.deleteStar = (req, res, next) => {
  const star_id = req.params.star_id;
  userDB
    .query(`DELETE FROM StarredListings WHERE star_id = ${star_id}`)
    .then(() => next())
    .catch((err) =>
      next({
        log: `starController delete star error: ${err}`,
        message: 'delete star error',
        status: 500,
      }),
    );
};

// userDB
//   .query(
//     "INSERT INTO StarredListings (user_id, name, price, location, picture_link, check_in, check_out) VALUES (3, 'sdfd', 200.00, 'sdfsdfs', 'sdfsf', '2024-01-17', '2024-01-18') RETURNING star_id",
//   )
//   .then((results) => console.log(results));

// userDB
//   .query('SELECT * FROM StarredListings WHERE user_id = 1')
//   .then((results) => console.log(results));

// userDB
//   .query('DELETE FROM StarredListings WHERE star_id = 4')
//   .then((results) => console.log(results));

module.exports = starController;
