const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator')
const fetch = require("node-fetch");

// @route   @Get api/fivedayByThreeHourWeather
// @desc    Test route
// @access  Public
router.get('/', (req, res) => res.send('Five Day By Three Hour Weather route'));


// @route   @Post api/fiveDayByThreeHourWeather
// @desc    Test route
// @access  Public
router.post('/',[
  check('country', 'Country is required')
    .not()
    .isEmpty(),
  check('city', 'City is required')
    .not()
    .isEmpty()
], async (req, res) => {

  const errors = validationResult(req);
  if(!errors.isEmpty())
  {
    return res.status(400).json({ errors: errors.array() });
  }

  const {country, state, city} = req.body;
  const typeOfRequest = "Five Day By Three Hour Weather";
  try
  {
      //console.log(city + " " + country + " " + state + " " + typeOfRequest);
      const url = 'https://mitxwj0bwk.execute-api.us-east-1.amazonaws.com/test/weatheranalysis?city=' + city + '&state=' + state + '&country=' + country + '&typeOfRequest=' + typeOfRequest;
      const response = await fetch(url);
      const data = await response.json();
      // const pData = JSON.parse(JSON.stringify(data));
      // const {weather , main, wind, clouds } = data;

      const weatherRequestFields = {country: country, state: state, city: city, typeOfRequest: typeOfRequest};
      // Create a new campground and save to DB
      const weatherRequest = new Request(weatherRequestFields);
      await weatherRequest.save();
      console.log(data);
      res.json(data);
  }
  catch (err)
  {
    console.error(err.message);
    res.status(500).send('Server error');
  }

});

module.exports = router;
