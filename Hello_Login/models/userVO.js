var mongoose = require('mongoose');
var userVO = mongoose.Schema({
	
	strEmail : String,
	strPassword : String,
	isAdmin : false
	
})
module.exports = mongoose.model('user',userVO)