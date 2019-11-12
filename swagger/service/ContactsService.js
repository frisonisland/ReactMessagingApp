'use strict';


/**
 * add a contact
 *
 * returns Contact
 **/
exports.addContact = function() {
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
 * get all contacts
 *
 * returns List
 **/
 exports.getContacts = function() {
   return new Promise(function(resolve, reject) {
     var examples = [{userId: "sdhk", name:"Marco", status: true,
                     info:"Playing videogames", picture:"man.png"},
                     {userId: "jhkjhdksa", name:"Caterina", status: false,
                                     info:"Working", picture:"avatar_woman.png"}];
     if (Object.keys(examples).length > 0) {
       resolve(examples);
     } else {
       resolve();
     }
   });
 }
