module.exports = function(app,bVO){
	
	app.get('/insert',(req,res)=>{
		res.render('input_form')
	})
	
	app.post('/insert',(req,res)=>{
		
		var vo = new bVO(req.body);
		vo.save(function(err,data){
			
			// ajax로 받았을때 실행할 코드
			res.status(200)
			res.json( {msg:'ok'} )
			
			// submit으로 받았을때 실행할 코드
			// res.redirect('/list')
			
		})
	})
	app.get('/list',(req,res)=>{
		bVO.find((err,result)=>{
			res.render('list_body',{list:result})
		})
	})
	
	app.get('/getItem',(req,res)=>{

		// ajax의 $.get()에 의해 질의 된 값을 추출할때
		var id = req.query._id ;

		console.log(id);
		// ajax의 질의에 결과를 json으로 되돌려 보낸다.
		bVO.findOne({_id:id},(err,data)=>{
			res.json(data);
		})
		
	})
	
	app.post('/update',(req,res)=>{
		
		var id = req.body.id;
		bVO.update({_id:id},{$set:req.body},(err,data)=>{
			res.status(200);
			res.json({msg:'ok'})
		})
	})
	
	app.post('/delete',(req,res)=>{
		
		var id = req.body.id
		bVO.remove({_id:id},(err,data)=>{
			res.status(200);
			res.json({msg:'ok'})
		})
	})

}