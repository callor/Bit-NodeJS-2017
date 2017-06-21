module.exports = function(app){
	
	app.get('/add/num',function(req,res){
		res.send("덧셈을 하려면 2개의 숫자가 필요합니다.");
	})
	
	app.get('/add/num/:num1',function(req,res){
		res.send("덧셈을 하는데 숫자가 1개 더 필요합니다");
	})
	
	app.get('/add/num/:num1/:num2',function(req,res){
		
		var num1 = parseInt(req.params.num1); // 문자열을 숫자로 변환
		var num2 = parseInt(req.params.num2);
		
		var sum = num1 + num2;
		
		res.send("두숫자의 합:" + sum);
	})
}