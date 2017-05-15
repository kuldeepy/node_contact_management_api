'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var contactSchema = new Schema({
	name:{
		firstName:{
			type:String,
			Required:'Kindly enter first name'
		},
		lastName:{
			type:String,
			Required:'Kindly enter last name'
		},
		mi:{
			type:String
		},
		suffix:{
			type:String
		}
	},
	address:{
		street:{
			type:String
		},
		city:{
			type:String
		},
		state:{
			type:String
		},
		zip:{
			type:Number
		},
		country:{
			type:String
		}
	},
	Created_date: {
    	type: Date,
    	default: Date.now
  }

});

module.exports = mongoose.model('Contacts',contactSchema);