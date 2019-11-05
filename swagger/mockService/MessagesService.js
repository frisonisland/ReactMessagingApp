'use strict';


/**
 * get messages of user
 *
 * userId BigDecimal userId of user chat
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

