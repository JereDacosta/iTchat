const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Message = new Schema({
  sender: {
    type: String
  },
  message:
  {
    type: String
  },
  date:
  {
    type: Date
  }
},
  {
    collection: 'Message'
  });

module.exports = mongoose.model('Message', Message);
