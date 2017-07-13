$(document).ready(function(){
	
	$('#searchValue').keypress(function(event){
		if(event.keyCode == 13) {

			// radio 버튼의 선택된 항목의 name을 보고, value 값을 가져 온다.
			let sItem = $(':radio[name="searchItem"]:checked').val()
			
			if(sItem == 'news'){
				$.post('/naver/news',{searchValue : $(this).val()},
						function(result){
						$('#resultBody').html(result)
				})
			} else if (sItem == 'blog') {
				$.post('/naver/blog',{searchValue : $(this).val()},
						function(result){
						$('#resultBody').html(result)
				})
			}

		}
	})
})