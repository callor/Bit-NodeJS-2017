module.exports = (app,gVO)=>{
	
	app.get('/',(req,res)=>{
		res.render('index')
	})
	
	app.post('/insert',(req,res)=>{
		var vo = new gVO(req.body)
		vo.save((err,data)=>{
			res.json(data)
		});
	})
	
	app.post('/update',(req,res)=>{
		gVO.update({_id:req.body.id},{$set:req.body},(err,data)=>{
			res.json(data);
		})
	})
	
	app.post('/getitem',(req,res)=>{
		gVO.findOne({_id:req.body.id},(err,data)=>{
			res.json(data)
		})
	})
	
	app.post('/numcheck',(req,res)=>{
		gVO.find({strNum:req.body.strNum}) // 조건검색을 하고
			.count()						// 검색된 결과의 수량을 세고
			.exec((err,data)=>{				// callback 실행
				res.json({count:data})
		})
	})
	
	app.post('/delete',(req,res)=>{
		gVO.remove({_id:req.body.id},(err,data)=>{
			res.json(data)
		})
	})

	app.get('/list',(req,res)=>{
		gVO.find((err,data)=>{
			res.render('list_body',{list:data})
		})
	})
}