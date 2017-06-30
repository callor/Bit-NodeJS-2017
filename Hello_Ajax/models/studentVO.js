var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

var studentVO = mongoose.Schema({

	strNum : String,
	strName : String,
	intGrade : Number,
	strTel : String
	
})
module.exports = mongoose.model('student',studentVO);
