// nodejs를 클라이언트로 사용할 API를 import
var request = require('request') 

// 외부에 변수 파일을 만들고 파일을 읽어 들인다
var myInfo = require('./myData.go.kr.key.js') 

module.exports = (app,gVO)=>{
	
	app.get('/',(req,res)=>{
		res.render('index')
	})
	
	app.post('/gjbus/station',(req,res)=>{
		var station = req.body.station; // 정류장 검색
		
//		gVO.find({BUSSTOP_NAME:RegExp('^'+station)}) // 시작문자열 검사, 조건
		gVO.find({BUSSTOP_NAME:RegExp(station,'ig')}) // 중간문자열 검사, 조건
			.sort({BUSSTOP_NAME : 1}) // 정렬, 1 : 오름차순, -1 : 내림차순 정렬
			.limit(10)
			.exec((err,data)=>{
				res.render('station_list',{list:data});	
			})
	})
	
	app.post('/gjbus/bustop',(req,res)=>{
		
		// 클라이언트에서 넘겨온 id 추출
		var busid = req.body.id
		
		var myKey = encodeURIComponent(myInfo.myDataKey);
		var url = 'http://api.gjcity.net/json/arriveInfo';
		var queryParams = '?';
		queryParams += encodeURIComponent('ServiceKey') + '=' + myKey ;
		queryParams += '&' + encodeURIComponent('BUSSTOP_ID') + '=' 
			+ encodeURIComponent(busid)
		
			
		request({
		
			url : url + queryParams,
			method : 'GET'
			
		},(err,response,body)=>{

			// 문자열 구조를 Object로 변환
			var stop_info = JSON.parse(body);
//			res.send(stop_info.RESULT.RESULT_CODE)
			if(stop_info.RESULT.RESULT_CODE == 'ERROR') {
				// 도착정보 없음
				res.send('도착정보 없음');
			} else {
				// 도착정보 있음
//				res.json(stop_info.BUSSTOP_LIST)
				res.render('busleft',{list:stop_info.BUSSTOP_LIST})
			}
		})
	})
	
	// BIS 서버에 DB를 요청할 기능 설정
	app.get('/gjbus/getDbAll',(req,res)=>{
		
		var myKey = encodeURIComponent(myInfo.myDataKey);
		var url = 'http://api.gjcity.net/json/stationInfo';
		var queryParams = '?';
		queryParams += encodeURIComponent('ServiceKey') + '=' + myKey ;
		// queryParams += encodeURIComponent('BUSSTOP_ID')

		request({
			url : url + queryParams,
			method : 'GET'
		},(err, response, body)=>{
			// Json 모양의 문자열 데이터를
			// Json 구조의 Object 데이로 변환 시킨다.
			var data = JSON.parse(body);
			
			var rcode = data.RESULT.RESULT_CODE;
			var rmsg = data.RESULT.RESULT_MSG;
			
			var station_list = data.STATION_LIST

			res.write(station_list.length + '\n')
			
			gVO.remove(()=>{
				station_list.forEach((station)=>{
					var vo = new gVO(station)
					vo.save((err,data)=>{
						res.end('DB Insert OK')
					})
// res.write(station.BUSSTOP_NAME)
// res.write('\n')
				})
			})
// res.end('')
			
// res.json(station_list)
// res.write(rcode + '\n');
// res.end(rmsg)
			
// res.json(body)
			
			
		})
		
		
// console.log(myKey);
// res.write(myInfo.myDataKey)
// res.write('\n')
// res.end(myKey)
	})
	
}