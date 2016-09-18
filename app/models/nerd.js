// grab monogoose

var mongoose = require('mongoose');

module.exports = monogoose.model('Nerd', {
	name : {type : String, default: ''},
	email : {type : String, default: ''},
	password : {type : String, default: ''}
	
});


 
	 
