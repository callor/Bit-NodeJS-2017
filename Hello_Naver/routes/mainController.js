var request = require('request');
var naver_secret = require('./naver_secret.js')

module.exports =(app)=>{
	app.get('/',(req,res)=>{
		res.render('index')
	})
	
	app.post('/naver/book',(req,res)=>{
	
		let searchBook = req.body.searchBook
		
		// naver API 조회 하기 위한 설정
		// 필수항목
		api_url = 'https://openapi.naver.com/v1/search/book.json';
		api_url += '?query='+encodeURI(searchBook)
		
		// 옵션항목
		// api_url += '&display=' + 20;

		let options = {
				url : api_url,
				headers : {
					'X-Naver-Client-Id':naver_secret.client_id,
					'X-Naver-Client-Secret':naver_secret.client_secret
				}
		};
		
		request.get(options,(err,response,result)=>{

			console.log(result)
			// naver에서 정상적으로 결과를 보내면
			if(!err && response.statusCode == 200) {
			
				let result_json = JSON.parse(result).items
//				res.json(result_json)
				res.render('bookBox',{books:result_json})
			
			} else {
				
				res.status(response.statusCode).end();
				console.log(response.statusCode)
				
			} 
		})
	})
	
	app.post('/naver/movie',(req,res)=>{
		let searchBook = req.body.searchBook
		
		// naver API 조회 하기 위한 설정
		// 필수항목
		api_url = 'https://openapi.naver.com/v1/search/movie.json';
		api_url += '?query='+encodeURI(searchBook)
		
		// 옵션항목
		 api_url += '&display=' + 20;

		let options = {
				url : api_url,
				headers : {
					'X-Naver-Client-Id':naver_secret.client_id,
					'X-Naver-Client-Secret':naver_secret.client_secret
				}
		};
		
		request.get(options,(err,response,result)=>{

			console.log(result)
			// naver에서 정상적으로 결과를 보내면
			if(!err && response.statusCode == 200) {
			
				let result_json = JSON.parse(result).items
//				res.json(result_json)
				res.render('bookBox',{books:result_json})
			
			} else {
				
				res.status(response.statusCode).end();
				console.log(response.statusCode)
				
			} 
		})
		
	})
	
}





