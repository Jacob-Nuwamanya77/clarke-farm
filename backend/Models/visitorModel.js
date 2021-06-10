const mongoose = require('mongoose');

const { Schema } = mongoose;

const visitorSchema = new Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
  },
  checkin: {
    type: String,
  },
  checkout: {
    type: String,
  },
  guestNumber: {
    type: String,
  },
  accomodation: {
    type: String,
  },
  requests: {
    type: String,
  },
}, {
  collection: 'visitors',
},
{ timestamps: true });

module.exports = mongoose.model('Visitor', visitorSchema);
