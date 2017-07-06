module.exports = (app,sVO)=>{
	app.get('/',(req,res)=>{
		res.render('index')
	})
	
	app.get('/list',(req,res)=>{
		sVO.find((err,data)=>{
			res.render('list',{list:data})
		})
	})
	
	app.post('/insert',(req,res)=>{
		var vo = new sVO(req.body)
		vo.save((err,data)=>{
			res.status(200)
			res.json({msg:'OK'})
		})
	})
	
	app.post('/getitem',(req,res)=>{
		var id = req.body.id; //클라이언트에서 넘겨준 id를 추출
		sVO.findOne({_id:id},(err,data)=>
			res.json(data)// 추출된 1개의 레코드를 
						// json 형태로 클라이언트에게 되돌려 준다.
		)
	})
	
	app.post('/update',(req,res)=>{
		var id = req.body.id
		sVO.update({_id:id},{$set:req.body},(err,data)=>{
			res.status(200);
			res.json({msg:'OK'})
		})
	})
	
	app.post('/delete',(req,res)=>{
		var id = req.body.id
		sVO.remove({_id:id},(err,data)=>{
			res.status(200)
			res.json({msg:'OK'})
		})
	})
}



