'use strict';


/**
 * get messages of user
 *
 * userId BigDecimal userId of user chat
 * returns List
 **/
exports.getMessages = function(userId) {
  return new Promise(function(resolve, reject) {
    var examples = [{body:"Ciao!"}, {body:"Come va?"}];
    if (Object.keys(examples).length > 0) {
      resolve(examples);
    } else {
      resolve();
    }
  });
}
