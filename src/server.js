const express = require('express');
require('dotenv').config();
const path = require('path');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const apiRouter = require('./routes/api.js');
const starRouter = require('./routes/star.js');

const PORT = process.env.PORT || '3000';

const app = express();

// handle parsing request body
app.use(cookieParser());
app.use(express.json()); // parses body EXCEPT html
app.use(express.urlencoded({ extended: true })); // requires header to parse
app.use(
  cors({
    origin: 'http://localhost:5500',
    credentials: true,
  })
);

//mounting api router
app.use('/api', apiRouter);
//mounting star router
app.use('/star', starRouter);

if (process.env.NODE_ENV === 'production') {
  // statically serve everything in the build folder on the route '/build'
  app.use('/build', express.static(path.join(__dirname, '../build')));
  // serve index.html on the route '/*'
  app.get('/*', (req, res) => {
    return res.status(200).sendFile(path.join(__dirname, '../index.html'));
  });
}

// catch-all route handler for any requests to an unknown route
app.use((req, res) => res.status(404).send("This is not the page you're looking for..."));

//express global error handler (middleware)
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

//start server and connect to mongoDB
app.listen(PORT, async () => {
  console.log(`Server listening on port: ${PORT}...`);
});

module.exports = app;
