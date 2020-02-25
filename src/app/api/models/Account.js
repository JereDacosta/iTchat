const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Account = new Schema({
  username: {
    type: String
  },
  password:
  {
    type: String
  },
  isConnected:
  {
    type: Boolean
  },
  date:
  {
    type: Date
  }
},
  {
    collection: 'Account'
  });

module.exports = mongoose.model('Account', Account);
