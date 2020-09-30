const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator')
const mongoose = require('mongoose');
const Request = require('../../models/Request');
// @route   @Get api/reuests
// @desc    Test route
// @access  Public
router.post('/', [
    check('date', 'Date is required')
    .not()
    .isEmpty()
],async (req, res) =>
{
  const errors = validationResult(req);
  if(!errors.isEmpty())
  {
    return res.status(400).json({ errors: errors.array() });
  }
  //res.send(req.body.date);
  const { date } = req.body;

  const dateString = date.toString();
  const requests = await Request.find({date: dateString}).exec();

  if(requests.length === 0)
  {
    requests[0] = "No Requests"
  }
  res.json(requests);

});

// @route   @Post api/fiveDayByThreeHourWeather
// @desc    Test route
// @access  Public

// @route @Get api/
module.exports = router;
