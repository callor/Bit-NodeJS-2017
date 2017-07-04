// module.exorts = function(app,bVO) {
module.exports = (app,bVO)=> {
	app.get('/',(req,res)=>{
		res.render('index')
	});
	
	app.get('/list',(req,res)=>{
		bVO.find((err,data)=>{
			res.render('list',{list:data})
		})
	})
	
	app.post('/insert',(req,res)=>{
		
		var vo = new bVO(req.body);
		vo.save((err,data)=>{
			res.status(200) // 완료되었다.
			res.json({msg:'OK'}) // 완료메시지
		})
	})
	
	app.post('/getitem',(req,res)=>{
		var id = req.body.id
		bVO.findOne({_id:id},(err,data)=>{
			res.json(data);
		})
	})
	
	app.post('/update',(req,res)=>{
		var id = req.body.id
		bVO.update({_id:id},{$set:req.body},(err,data)=>{
			res.status(200)
			res.json({msg:'OK'})
		})
	})
	
	app.post('/delete',(req,res)=>{
		var id = req.body.id
		bVO.remove({_id:id},(err,data)=>{
			res.status(200)
			res.json({msg:'OK'})
		})
	})
}










