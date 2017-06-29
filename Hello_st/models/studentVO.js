var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var studentVO = mongoose.Schema({
	
	strNum : String,
	strName : String,
	strGrade : String,
	strTel : String,
	intAge : Number
	
})
module.exports = mongoose.model('student',studentVO);