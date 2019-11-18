'use strict';


/**
 * get messages of user
 *
 * userId String userId of user chat
 * returns List
 **/
exports.getMessages = function(userId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Send message
 *
 * body Message Message to send
 * userId String userId of user chat
 * no response value expected for this operation
 **/
exports.sendMessage = function(body,userId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

