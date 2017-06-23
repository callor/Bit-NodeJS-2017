module.exports = function(app,mVO){
	
	app.get('/insert',function(req,res){
		var vo = new mVO(); // 빈 데이터를 만들어서 input_form을 render 한다.
		res.render('input_form',
					{
						item:vo,
						action:'/insert',
						pageTitle:'회원정보등록'
					});
//		res.render('input_form')
	})
	
	// form에서 데이터를 입력하고, 저장 질의(명령)을 실행했을때 호출되는 부분
	app.post('/insert',function(req,res){
		var vo = new mVO(req.body);
		vo.save(function(err,data){
//			res.json(data);
			res.redirect('/list'); // 무조건 화면 강제 전환
		})
	})
	
	app.get('/list',function(req,res){
		// db.colllection.find()
		mVO.find(function(err,data){
//			res.json(data);
			// find()에서 읽혀진 member 리스트는 data에 담겨 있다.
			// data에 담긴 리스트를 list 변수에 담아서 render에게 전달
			// render는 views/list.ejs 파일을 열어서
			// list 변수에 담긴 리스트를 입히고
			// 결과를 client에게 보낸다
			res.render("list",{list:data}) // 
			
		})
	})

	app.get('/update/:id',function(req,res){
		
		var id = req.params.id;
		
		mVO.findOne({_id:id},function(err,data){
			res.render('input_form',
					{
				
						item:data,
						action:'/update',
						pageTitle:'회원정보수정'
							
					});
		})
	})
	
	app.post('/update',function(req,res){
	
		var id = req.body.id
		mVO.update({_id:id},{$set:req.body},function(err,data){
			res.redirect('/list')
		})
		
	})
	
	
	
	// 클라이언트에서 /delete질의를 하면서 _id 값을 전달해주면
	// :id로 받는다.
	app.get('/delete/:id',function(req,res){
		var id = req.params.id ; // :id에 저장된 값을 추출하여 
									// id 변수에 담는다.
		mVO.remove({_id:id},function(err,data){
			res.redirect('/list');
		})
	})
}




