module.exports = (app)=>{
	app.get('/iot/:id',(req,res)=>{
		console.log(req.params.id);
		res.send(req.params.id+"님 반갑습니다")
	})
}