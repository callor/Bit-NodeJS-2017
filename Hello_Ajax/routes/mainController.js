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

		ps.then(function(err,data){
			res.status(200);
//			res.redirect('/list')
		})
		
	})
	
	app.post('/update',function(req,res){
		
//		var vo = new sVO(req.body);
		var id = req.body._id;
		console.log(id)
		// promise 테스트
		var ps = sVO.update({_id:id},{$set:req.body});
		ps.then(function(err,data){
			res.status(200);
//			res.redirect('/list')
		})
		
	})
	
	app.post('/delete',function(req,res){
		console.log(req.body.id)
		console.log(req.params.id)
		console.log(req.query.id)

		var id = req.body.id;
		sVO.remove({_id:id},function(err,data){
//			console.log(err);
//			console.log(data);
			res.status(200)
		});
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
	
	app.delete('/delete',(req,res)=>{
		var id = req.body.id ;
		sVO.remove({_id:id})
	})
	
	app.get('/getstudent',(req,res)=>{
		console.log(req.body.id)
		console.log(req.params.id)
		console.log(req.query.id)
		var id = req.query.id;
		sVO.findOne({_id:id},(err,data)=>{
			res.json(data);
		})
	})
	
	app.get('/test',function(req,res){
		res.render('test')
	})

}









