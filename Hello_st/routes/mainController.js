module.exports = function(app,stVO){
	
	app.get('/insert',function(req,res){
		var vo = stVO
		res.render('input_form',
				{
					item:vo,
					action:'/insert',
					pageTitle:'등록'
						
				});
	})
	app.post('/insert',function(req,res){
		var vo = new stVO(req.body);
		
		vo.save(function(err,data){
//			res.json(data);
			res.redirect('/list')
		})
	})
	app.get('/list',function(req,res){
		stVO.find(function(err,data){
//			res.json(data);
			res.render('list',{list:data});
		})
	})
	
	app.get('/delete/:id',function(req,res){
		var id = req.params.id
		stVO.remove({_id:id},function(err,data){
			res.redirect('/list')
		})
	})
	
	app.get('/update/:id',function(req,res){
		var id = req.params.id
		stVO.findOne({_id:id},function(err,data){
			res.render('input_form',
					{
						item:data,
						action :'/update',
						pageTitle : '수정'
					})
		})	
	})
	app.post('/update',function(req,res){
		var id = req.body.id;
		stVO.update({_id:id},{$set:req.body},function(err,data){
			res.redirect('/list')
		})
	})
}





