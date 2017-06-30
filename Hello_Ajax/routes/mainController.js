module.exports = (app,sVO)=>{
	
//	var g = app.get('/list')
//	g.then(/dsdfasdf/)
	
	app.get('/insert',function(req,res){
		res.render('input_form');
	})
	
	app.post('/insert',function(req,res){
		
		var vo = new sVO(req.body);
		
		// promise 테스트
		var ps = vo.save();

//		ps.then(function(err,data){
//			res.redirect('/list')
//		})
		
	})
	
	app.get('/list',function(req,res){
		var pfind = sVO.find((err,data)=>{
			res.render('list',{list:data})
		});

		// Promise를 사용했을때,
		/*
		pfind.then((err,data)=>{
			res.render('list')
		})
		*/
		
	})
	
	app.get('/listbody',(req,res)=>{
		sVO.find((err,data)=>{
			res.render('list_body',{list:data})	
		})
	})
	
	app.get('/test',function(req,res){
		res.render('test')
	})

}









