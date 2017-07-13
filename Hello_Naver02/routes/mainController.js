var request = require('request')
var naver_secret = require('./naver_secret.js')

var options = api_url => {
	
	// options에 필요한 요소를 json 구조로 설정해서 리턴
	return { 
		url : api_url,
		headers : {
			'X-Naver-Client-Id' : naver_secret.client_id,
			'X-Naver-Client-Secret' : naver_secret.client_secret
		}
	}
}


module.exports = app =>{
	app.get('/',(req,res)=>{
		res.render('index')
	})	
	
	app.post('/naver/news',(req,res)=>{
		
		let searchNews = req.body.searchValue;
		let api_url = 'https://openapi.naver.com/v1/search/news.json';
		api_url += '?query=' + encodeURI(searchNews);

		request.get(options(api_url),(err,response,result)=>{
		
			// 정상적으로 naver에서 응답을 받으면
			if(!err && response.statusCode == 200){
				let result_json = JSON.parse(result).items
				res.render('newsBox',{newses:result_json})
			}
		})
	})
	app.post('/naver/blog',(req,res)=>{
		
		let searchBlog = req.body.searchValue;
		let api_url = 'https://openapi.naver.com/v1/search/blog.json';
		api_url += '?query=' + encodeURI(searchBlog);

		request.get(options(api_url),(err,response,result)=>{
		
			// 정상적으로 naver에서 응답을 받으면
			if(!err && response.statusCode == 200){
				let result_json = JSON.parse(result).items
				res.render('blogBox',{blogs:result_json})
			}
		})
	
	})
}
