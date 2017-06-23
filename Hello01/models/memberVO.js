// member 회원관리를 위한 model 선언
var mongoose = require('mongoose');

var vo = mongoose.Schema({

	strName : String,
	strAddr : String,
	strTel : String,
	intAge : Number
})

// vo로 선언된 스키마를 이용해서 members Collection으로 생성하라
// db.members.find() 
module.exports = mongoose.model('member',vo);