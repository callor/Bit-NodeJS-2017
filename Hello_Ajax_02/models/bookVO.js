var mongoose = require('mongoose');
var bookVO = mongoose.Schema({

	strTitle : String,
	strComp : String,
	strGenre : String,
	intPrice : Number
	
})

module.exports = mongoose.model('book',bookVO)
