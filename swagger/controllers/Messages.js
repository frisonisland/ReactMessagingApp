'use strict';

var utils = require('../utils/writer.js');
var Messages = require('../service/MessagesService');

module.exports.getMessages = function getMessages (req, res, next) {
  var userId = req.swagger.params['userId'].value;
  Messages.getMessages(userId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
