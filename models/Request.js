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
    },
    date:{
      type: String,
      required: true
    },
    time:{
      type: String,
      required: true
    },
    file:{
      type:String,
      required: true
    },
    requestSuccess:{
      type: String,
      required: true
    }
});

module.exports = Request = mongoose.model('Request', RequestSchema);
