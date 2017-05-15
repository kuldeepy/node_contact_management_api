'use strict';
module.exports = function(app) {
  var contacts = require('../controllers/contactController');


  // contactList Routes
  app.route('/contact')
    .get(contacts.list_all_contact)
    .post(contacts.create_a_contact);


  app.route('/contact/:contactId')
    .get(contacts.read_a_contact)
    .put(contacts.update_a_contact)
    .delete(contacts.delete_a_contact);
};
