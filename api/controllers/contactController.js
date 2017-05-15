'use strict';
var mongoose = require('mongoose'),
  Contact = mongoose.model('Contacts');
  exports.list_all_contact = function(req,res)
  {
	  	Contact.find({},function(err,contact){
	  		if(err)
	  			res.send(err);
	  		res.json(contact);
	  	});
  };

  exports.create_a_contact = function(req, res)
  	{
  		var new_contact = new Contact(req.body);

  		new_contact.save(function(err,contact){
  			if(err)
  				res.send(err);
  			res.json(contact);
  		});
  	};
  	
  exports.read_a_contact = function(req, res) {
  Contact.findById(req.params.contactId, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.update_a_contact = function(req, res) {
  Task.findOneAndUpdate(req.params.contactId, req.body, {new: true}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.delete_a_contact = function(req, res) {


  Task.remove({
    _id: req.params.contactId
  }, function(err, task) {
    if (err)
      res.send(err);
    res.json({ message: 'Task successfully deleted' });
  });
};