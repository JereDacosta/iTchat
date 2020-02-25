const express = require('express');
const app = express();
const accountRoutes = express.Router();

let Account = require('../models/Account');

//Post account route
accountRoutes.route('/post').post(function (req, res) {
  let account = new Account(req.body);
  account.save()
    .then(account => {
      res.status(200).json({ 'account': 'account added successfully' });
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
});

//Get account route
accountRoutes.route('/').get(function (req, res) {
  Account.find(function (err, accounts) {
    if (err) {
      console.log(err);
    }
    else {
      res.json(accounts);
    }
  });
});

module.exports = accountRoutes;

