module.exports = function(app){
	
	app.get('/insert',function(req,res){
		res.render('insertform');
	})
	app.post('/insert',function(req,res){
		
		var name = req.body.strName;
		var tel = req.body.strTel;
		var age = req.body.intAge;
		
		// 한글깨짐 방지
		res.writeHead(200,{'Content-Type':'text/html;charset=UTF-8'})
		
		res.write('이름'+name + '\n')
		res.write('전화번호'+tel + '\n')
		res.end('나이'+age)
		
	})
}