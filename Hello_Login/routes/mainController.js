var crypto = require('crypto');

module.exports = (app,userVO)=>{
	
	app.get('/',(req,res)=>{
		var session = req.session
//		session.strEmail = data.strEmail
//		session.isAdmin = data.isAdmin
//		session.isLogin = true
		
		if(session.isLogin == true) {
			res.render('index',
					{strEmail:session.strEmail,isAdmin:session.isAdmin}
			)
		} else {
			res.render('login',{msg:''})
		}
	})
	
	app.post('/emailcheck',(req,res)=>{
		userVO.findOne({strEmail:req.body.strEmail},(err,data)=>{
			res.json(data)
		})
	})
	
	app.post('/register',(req,res)=>{
		userVO.find()
			.count()
			.exec((err,count)=>{
				if(count < 1){
					// form에서 사용되지 않는 name 이지만
					// 아래처럼 추가하면 isAdmin 필드가 추가된다
					req.body.isAdmin = true;
				} else {
					req.body.isAdmin = false;
				}
				
				// req에서 비번 추출
				let strPassword = req.body.strPassword
				// 암호화
				let encrypto = crypto.createHmac('sha1',app.get('secret'))
								.update(strPassword) // 암호화 시킬 대상
								.digest('base64') // 불필요한 문자 삭제, 암호문만 남김
				
				req.body.strPassword = encrypto
				var vo = new userVO(req.body)
				vo.save((err,data)=>{
					res.json(data)
				})
			})
	})
	
//	app.get('/login',(req,res)=>{
//		res.render('login')
//		
//		// 아이디와 비번을 정상 입력해서 인증 받았다는 가정
////		var session = req.session
////		session.username = 'callor@callor.com';
////		session.loginOk = true;
////		res.send('Login OK')
//	
//	})
	app.post('/login',(req,res)=>{
	
		var strEmail = req.body.strEmail
		var strPassword = req.body.strPassword
		let encrypto = crypto.createHmac('sha1',app.get('secret'))
			.update(strPassword) // 암호화 시킬 대상
			.digest('base64'); // 불필요한 문자 삭제, 암호문만 남김

		userVO.findOne({strEmail:strEmail,strPassword:encrypto},
				(err,data)=>{
					if(data) {
						let session = req.session
						
						session.strEmail = data.strEmail
						session.isAdmin = data.isAdmin
						session.isLogin = true
						
						res.redirect('/')
					} else {
						res.render('login',{msg:'로그인 실패'})
					}
		})	
	})
	
}