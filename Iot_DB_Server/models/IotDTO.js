var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

var iotVO = mongoose.Schema({
	
	strIotNum : String,
	strIotDateTime : {type:Date,default:Date.now },
	intValue : Number
	
})

iotVO.statics.create = (vo)=>{
	let v = new this(vo); // this = iotVO와 같다
	return v.save();
}

module.exports = mongoose.model('iotData',iotVO);