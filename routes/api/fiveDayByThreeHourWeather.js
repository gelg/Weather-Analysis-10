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
      var today = new Date();
      var year = today.getFullYear();
      if(today.getMonth() < 9)
      {
        var month = "0" + (today.getMonth() +1);
      }
      else
      {
        var month = (today.getMonth() + 1);
      }
      if(today.getDate() < 10)
      {
        var day = "0" + (today.getDate());
      }
      else
      {
        var day = today.getDate();
      }
      var date = year + "-" + month + "-" + day;
      if(today.getHours() < 10)
      {
        var hours = "0" + today.getHours();
      }
      else
      {
        var hours = today.getHours();
      }
      if(today.getMinutes() < 10)
      {
        var minutes = "0" + today.getMinutes();
      }
      else
      {
        var minutes = today.getMinutes();
      }
      if(today.getSeconds() < 10)
      {
        var seconds = "0" + today.getSeconds();
      }
      else
      {
        var seconds = today.getSeconds();
      }
      var time = hours + ":" + minutes + ":" + seconds;

      const url = 'https://mitxwj0bwk.execute-api.us-east-1.amazonaws.com/test/weatheranalysis?city=' + city + '&state=' + state + '&country=' + country + '&typeOfRequest=' + typeOfRequest + '&date=' + date + '&time=' + time;
      const response = await fetch(url);
      const data = await response.json();

      var requestSuccess = "True";
      var file = "WeatherAnalysis " + "Date: "+  date + "/" + city + ", " + country + " Time: " + time  + ".json";
      if(data.cod === "404")
      {
         requestSuccess = "False";
         file ="No File"
      }
      const weatherRequestFields = {country: country, state: state, city: city, typeOfRequest: typeOfRequest, date: date, time: time, file: file, requestSuccess: requestSuccess};
      // Create a new campground and save to DB
      const weatherRequest = new Request(weatherRequestFields);
      await weatherRequest.save();
      res.json(data);
  }
  catch (err)
  {
    console.error(err.message);
    res.status(500).send('Server error');
  }

});

module.exports = router;
