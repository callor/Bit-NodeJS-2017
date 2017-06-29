// 변수에 함수의 몸체를 대입, 변수에 함수의 리턴값을 대입하는 것이 아님
var mainController = function(app){
	
					  // Callback
	app.get('/insert',function(req,res){
		res.render('input_form')
	})
	
	app.get('/jquery',(req,res)=>{
		res.render('jquery_sample')
	})
	
	app.get('/html5',(req,res)=>{
		res.render('html5_sample')
	})
	
	// function 키워드를 생략하고, Lamda 식으로 표현 ES6 문법
	app.get('/list',(req,res)=>{
		
	})
	
}

// 변수에 담긴 함수 몸체를 exports
module.exports = mainController

/*
module.exports = function(app) {
	
	
}
*/