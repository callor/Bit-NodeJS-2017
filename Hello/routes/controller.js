// 내 모듈을 외부에서 require 해서 쓸수 있도록 하는 키워드
// controller 모듈은 기본으로 app 매개변수를 갖는다
module.exports = function(app){
	
		// client의 질의어
		//					  req : client의 여러 정보가 담긴 객체
		//						  res : client에게 보낼 객체
	app.get('/hello',function(req,res){
		
		// 클라이언트에서 아무런 가공없이 문자열을 보내라
		res.send("안녕하세요");
	})
	
	app.get('/add',function(req,res){
		res.send("덧셈결과:"+(30+40));
	})
	
	app.get('/add/hello',function(req,res){
		res.send("덧셈과 Hello")
	})
	
	app.get('/welcome',function(req,res){
		// res.render('hello')
		//		views/hello.ejs 파일을 찾고,
		// 		views/hello.ejs 파일을 읽어서
		// 		(어떤)data를 hello.ejs 파일에 입혀서
		// 		client에게 보내는 역할을 합니다
		res.render('hello',{welcome:'우리집에 오신것을 환영합니다'})
	})
	
	// localhost:3000/welcome/hong/112/30 질의
	app.get('/welcome/:name/:tel/:age',function(req,res){
		// req에서 params라는 서브 객체를 추출하고, 
		// 서브 객체에서 name 변수 값을 추출하여
		// var name 변수에 저장한다.
		var name = req.params.name;
		var tel = req.params.tel;
		var age = req.params.age;
		
		// 여러줄의 문자열을 보내고자 할때는 write를 이용해서 보낸다
		res.write('name:' + name + '\n') // 줄바꿈표시 \n을 끝에 붙인다.
		res.write('tel:' + tel+ '\n')
		
		// 문자열 가장 마지막줄은 반드시 end로 끝나야한다.
		res.end('age:' + age)
	})
}

// controller 모듈을 선언하고
// 메인 controller(app.js)에서 require를 해 줘야
// 실제 서버 작동에 관여 된다.