var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var destinationSchema = new Schema({
  airport: {
    type: String,
    enum: ['AUS', 'DAL', 'LAX', 'SEA'],
  },
  arrival: Date

});

var flightSchema = new Schema({
  airline: {
    type: String,
    enum: ['American', 'Southwest', 'United']
  },
  flightNo: {
    type: Number,
    required: true,
    min: 10,
    max: 9999
  },
  departs: {
    type: Date,
    default: function () {
      return new Date().getFullYear();
    }
   

  },
  airport: {
    type: String,
    enum: ['AUS', 'DAL', 'LAX', 'SEA'],
    default: 'SEA'
  }, 
  destinations: [destinationSchema]
});

module.exports = mongoose.model('Flight', flightSchema);