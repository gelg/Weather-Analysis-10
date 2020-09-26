const express = require('express');
const connectDB = require('./config/db');

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('API Running'));

// Define Routes
app.use('/api/oneDayWeather', require('./routes/api/oneDayWeather'));
app.use('/api/fiveDayByThreeHourWeather', require('./routes/api/fiveDayByThreeHourWeather'));
app.use('/api/fiveDayByThreeHourWeatherAverage', require('./routes/api/fiveDayByThreeHourWeatherAverage'));
const PORT  = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
