'use strict';

var utils = require('../utils/writer.js');
var Message = require('../service/MessageService');

module.exports.sendMessage = function sendMessage (req, res, next) {
  var body = req.swagger.params['body'].value;
  Message.sendMessage(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
