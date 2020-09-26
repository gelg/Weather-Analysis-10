const mongoose = require('mongoose');

const RequestSchema = new mongoose.Schema({
    country: {
      type: String,
      required: true
    },
    state: {
      type: String,
    },
    city: {
      type: String,
      required: true
    },
    typeOfRequest:{
      type: String,
      required: true
    }
});

module.exports = Request = mongoose.model('Request', RequestSchema);
