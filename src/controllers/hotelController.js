const hotelController = {};
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '34270e732emshaf83c13e742ef6fp172053jsn29c3726f6433',
    'X-RapidAPI-Host': 'tripadvisor16.p.rapidapi.com',
  },
};

//get geo ID data
hotelController.getGeoID = async (req, res, next) => {
  const query = req.body.query; // paris
  const url = `https://tripadvisor16.p.rapidapi.com/api/v1/hotels/searchLocation?query=${query}`;

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);
    res.locals.geoID = result.data[0].geoID; //187147
    return next();
  } catch (error) {
    return next({
      log: `hotelController error: ${err}`,
      message: 'get geo ID error',
      status: 500,
    });
  }
};

//pass in geoID to search for hotels in that area
hotelController.searchHotels = async (req, res, next) => {
  const { checkIn, checkOut } = req.body; // 2024-01-19 date format
  const url = `https://tripadvisor16.p.rapidapi.com/api/v1/hotels/searchHotels?geoId=${res.locals.geoID}&checkIn=${checkIn}&checkOut=${checkOut}&pageNumber=1&currencyCode=USD`;
  // 'https://tripadvisor16.p.rapidapi.com/api/v1/hotels/searchHotels?geoId=187147&checkIn=2024-01-19&checkOut=2024-01-21&pageNumber=1&currencyCode=USD&rating=4&priceMax=300';

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);
    res.locals.hotelData = result;
    return next();
  } catch (error) {
    return next({
      log: `hotelController error: ${err}`,
      message: 'search for hotels error',
      status: 500,
    });
  }
};

module.exports = hotelController;
