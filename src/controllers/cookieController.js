const cookieController = {};

cookieController.verifyCookie = (req, res, next) => {
  if (!req.cookies.vayk_cookie) {
    //set random number to vayk_cookie
  }
};

module.exports = cookieController;
