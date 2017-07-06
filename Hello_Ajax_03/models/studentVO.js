var mongoose = require('mongoose')
var studentVO = mongoose.Schema({
	
	strNum : String,
	strName : String,
	intGrade : Number,
	strTel : String
	
})

module.exports = mongoose.model('student',studentVO);