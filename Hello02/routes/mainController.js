module.exports = function(app, bookVO) {

	app.get('/insert', function(req, res) {
		var vo = new bookVO();
		res.render('input_form', {
			item : vo,
			action : '/insert',
			pageTitle : '추가'
		})
	})

	app.post('/insert', function(req, res) {

		var vo = new bookVO(req.body); // form에서 넘겨준 값으로 채워진 vo 생성
		vo.save(function(err, data) {
			// res.json(data);
			res.redirect('/list')
		})

	})

	app.get('/list', function(req, res) {
		bookVO.find(function(err, data) {
			res.render('list', {
				list : data
			})
		})
	})

	app.post('/list', function(req, res) {

		// form에서 넘겨준 검색값
		var sTitle = req.body.strTitle;
		bookVO.find(
		// strTitle field의 값이 sTitle로 시작(ig)되는 문자열만 검색
		{
			strTitle : {
				$regex : new RegExp(sTitle, 'ig')
			}
		}, function(err, data) {
			res.render('list', {
				list : data

			})
		});
	})
	app.get('/update/:id', function(req, res) {
		var id = req.params.id

		bookVO.findOne({
			_id : id
		}, function(err, data) {
			res.render('input_form', {
				item : data,
				pageTitle : '수정',
				action : '/update'
			})
		})
	})

	app.post('/update', function(req, res) {
		var id = req.body.id;
		bookVO.update({
			_id : id
		}, {
			$set : req.body
		}, function(err, data) {
			res.redirect('/list')
		})
	})
	
	app.get('/delete/:id',function(req,res){
		var id = req.params.id
		bookVO.remove({_id:id},function(err,data){
			res.redirect('/list')
		})
	})

}