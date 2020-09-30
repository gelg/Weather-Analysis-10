const express = require('express');
const connectDB = require('./config/db');
const path = require('path');
const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));


// Define Routes
app.use('/api/oneDayWeather', require('./routes/api/oneDayWeather'));
app.use('/api/fiveDayByThreeHourWeather', require('./routes/api/fiveDayByThreeHourWeather'));
app.use('/api/requests', require('./routes/api/requests'));
app.use('/api/analysis', require('./routes/api/analysis'));

// Serve static assets in production
if(process.env.NODE_ENV === 'production')
{
  // Set statis folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}
const PORT  = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
