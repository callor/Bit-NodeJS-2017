var mongoose = require('mongoose');

var bookVO = mongoose.Schema({

	strTitle : String,
	strComp : String,
	strYear : String,
	intPrice : Number
	
});

module.exports = mongoose.model('book',bookVO);
