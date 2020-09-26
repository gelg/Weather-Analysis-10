const express = require('express');
const router = express.Router();

// @route   @Get api/fourDayHourlyWeatherAverage
// @desc    Test route
// @access  Public
router.get('/', (req, res) => res.send('Five Day by Three Hour Weather Average route'));

module.exports = router;
