var mongoose = require('mongoose');
var studentVO = mongoose.Schema({
	
	strNum : String,
	strName : String,
	strGrade : String,
	strTel : String,
	intAge : Number
	
})
module.exports = mongoose.model('student',studentVO);