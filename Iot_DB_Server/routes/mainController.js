module.exports = (app,iotDTO)=>{
	app.get('/insert/:strIotNum/:intValue',(req,res)=>{
		
		// 빈 VO 객체 생성
		let vo = new iotDTO();
		
		// 파라메터로 부터 값 할당
		vo.strNum = req.params.strNum;
		vo.intValue = req.params.intValue;
		
//		let vo = iotDTO.create(req.params)
		vo.save((err,data)=>{
				res.json(data);	
		})
		
		
		/*
		let vo = new iotDTO(req.params);
		vo.save();
		*/
		
	})
	
	app.get('/getControl',(req,res)=>{
		res.send('LED_ON');
	})
	
	app.get('/getserver/:email',(req,res)=>{
		res.write('Welcome')
		res.end(req.params.email)
	})
	
}