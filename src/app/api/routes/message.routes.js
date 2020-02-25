const express = require('express');
const app = express();
const messageRoutes = express.Router();

let Message = require('../models/Message');

//Post message route
messageRoutes.route('/post').post(function (req, res) {
  let message = new Message(req.body);
  message.save()
    .then(message => {
      res.status(200).json({ 'message': 'message added successfully' });
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
});

//Get messages route
messageRoutes.route('/').get(function (req, res) {
  Message.find(function (err, messages) {
    if (err) {
      console.log(err);
    }
    else {
      res.json(messages);
    }
  });
});


module.exports = messageRoutes;

