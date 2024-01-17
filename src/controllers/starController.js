const userDB = require('../models/userModel.js');
const starController = {};

// add starred listing
starController.addStar = (req, res, next) => {
  // define listing data from req body
  const { name, price, location, picture_link, check_in, check_out } = req.body;
  //check how cookies get set/sent, should it be res?
  const user_id = req.cookies.vayk_cookie;
  // insert into db passing listing data & returning star id (auto-serialized in db)
  userDB
    .query(
      `INSERT INTO StarredListings VALUES (${user_id}, ${name}, ${price}, ${location}, ${picture_link}, ${check_in}, ${check_out} RETURNING star_id`,
    )
    .then((results) => {
      // save star id of new starred listing to res.locals to pass back to client and return next
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

// get all starred listings
starController.getAllStars = (req, res, next) => {
  // if there is no cookie, then no listings have been saved yet
  if (!req.cookies.vayk_cookie) return res.status(200).json('no listings yet');
  // find user id by cookie id
  const user_id = req.cookies.vayk_cookie;
  // retrieve all starred listings by user id
  userDB
    .query(`SELECT * FROM StarredListings WHERE user_id = ${user_id}`)
    .then((results) => {
      // save to res.locals to pass back to client and return
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

// delete starred listing
starController.deleteStar = (req, res, next) => {
  // define star id from params
  const star_id = req.params.star_id;
  // delete from db the starred listing by passing in unique star id and return
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
