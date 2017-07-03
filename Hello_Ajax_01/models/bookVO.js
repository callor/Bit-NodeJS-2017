var mongoose = require('mongoose');
var bookVO = mongoose.Schema({
	
	strTitle : String,
	strComp : String,
	strGenre : String,
	strYear : String,
	intPrice : Number
	
})

// mongoDB find db.books.find()
module.exports = mongoose.model('book',bookVO);