const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator')
const fetch = require("node-fetch");
const mongoose = require('mongoose');

// @route   @Get api/analysis
// @desc    Test route
// @access  Public
router.get('/', (req, res) => res.send('Analysis route'));


// @route   @Post api/oneDayWeather
// @desc    Test route
// @access  Public
router.post('/',[
  check('file', 'File is required')
    .not()
    .isEmpty(),
], async (req, res) => {

  const errors = validationResult(req);
  if(!errors.isEmpty())
  {
    return res.status(400).json({ errors: errors.array() });
  }

  const { file } = req.body;
  try
  {
      const url = 'https://mitxwj0bwk.execute-api.us-east-1.amazonaws.com/test/analysis?file=' + file;
      const response = await fetch(url);
      const data = await response.json();
      //console.log(data);
      res.json(data);
  }
  catch (err)
  {
    console.error(err.message);
    res.status(500).send('Server error');
  }

});

module.exports = router;
