module.exports = (app,gVO)=>{
	
	app.get('/insert',(req,res)=>{
		res.render('input_form')
	})
	app.post('/insert',(req,res)=>{
		var vo = new gVO(req.body);
	
		var promise = vo.save() ;
		console.log(promise instanceof require('mpromise'));
		promise.then(function(data){
			res.json(data);
		})
	})
	
}