var mongoose = require('mongoose')

var gradeVO = mongoose.Schema({
	
	strNum : String,
	strName : String,

	intKor : Number,
	intEng : Number,
	intMath : Number,

	intTotal : Number,
	intAvg : Number
	
})
module.exports = mongoose.model('grade',gradeVO)
