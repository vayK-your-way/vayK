const airbnbController = {};
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '34270e732emshaf83c13e742ef6fp172053jsn29c3726f6433',
    'X-RapidAPI-Host': 'airbnb13.p.rapidapi.com',
  },
};

airbnbController.searchAirbnb = async (req, res, next) => {
  const { query, checkIn, checkOut } = req.query; // paris, 2024-01-19, 2024-01-21, 100
  const url = `https://airbnb13.p.rapidapi.com/search-location?location=${query}&checkin=${checkIn}&checkout=${checkOut}&adults=1&children=0&infants=0&pets=0&page=1&currency=USD`;
  //   const url = `https://airbnb13.p.rapidapi.com/search-location?location=paris&checkin=2024-01-19&checkout=2024-01-21&adults=1&children=0&infants=0&pets=0&page=1&currency=USD`;
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);
    res.locals.airbnbData = result;
    return next();
  } catch (error) {
    return next({
      log: `airbnbController error: ${err}`,
      message: 'search Airbnb error',
      status: 500,
    });
  }
};

module.exports = airbnbController;
