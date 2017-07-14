/**
 * 사진(파일) 업로드를 위해 설정
 */
var multer = require('multer');

// 저장할 함수의 확장기능 선언
var saveOptions = multer.diskStorage({
	destination : (req,file,func)=>{
		func(null,'./public/photos'); // 저장할 위치 지정
	},
	filename : (req,file,func)=>{
		func(null,Date.now()+'_'+file.originalname); // 파일이름 변환(보안)
	}
})

// 실제 저장을 담당할 함수 선언
// photoName : <input type='file' name='photoName'>으로 선언된 항목의 이름
var saveFile = multer({storage:saveOptions}).single('photoName');

module.exports = (app,photoVO)=>{
	app.get('/',(req,res)=>{
		photoVO.find((err,data)=>{
			res.render('index',{photos:data})	
		})
	})
	
	app.get('/upload',(req,res)=>{
		res.render('upload')
	})
	
	app.post('/upload',(req,res)=>{
		saveFile(req,res,(err)=>{
		
			// 정상적으로 저장 공간을 확인하고
			// 파일이름을 정상적으로 변환 시켰으면
			if(req.file != undefined){
				req.body.photoName = req.file.filename;
				var vo = new photoVO(req.body);
				vo.save((err,data)=>{
					res.redirect('/')
				})
			}

		})
	})
}









