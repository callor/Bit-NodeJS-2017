$(document).ready(function(){

	$("#searchBook").keypress(function(event){

		// Enter키가 입력되면
		if(event.keyCode == 13){

			let sItem = $(':radio[name="searchItem"]:checked').val();
			
			if( sItem == 'book') {
				$.post('/naver/book',{searchBook:$(this).val()},
						function(result){
						$('#resultBody').html(result)
				})
			} else if (sItem == 'movie'){
				$.post('/naver/movie',{searchBook:$(this).val()},
						function(result){
						$('#resultBody').html(result)
				})
			}
		}
	})
})
