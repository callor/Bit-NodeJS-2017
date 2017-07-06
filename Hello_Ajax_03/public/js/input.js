$(document).ready(function(){

	$('#newBtn').click(function(){
		$('input').val('');
		$('#saveBtn').text('추가')
	})
	$('#deleteBtn').click(function(){
		if($('#id').val() == '') {
			alert('삭제할 항목을 선택하세요');
			return
		}
		if(confirm($('#strName').val() + '\n' 
				+ '정보를 정말 삭제하시겠습니까')) {
			var id = $('#id').val()
			$.post('/delete',{ id: $('#id').val() },function(result){
				$('#listBtn').click();
				$('input').val('')
			})
		}
	})
	$('#saveBtn').click(function(){
		
		if($('#strNum').val() == ''){
			alert('학번은 반드시 입력해야 합니다.')
			$('#strNum').focus();
			return;
		}

		if($('#strName').val() == ''){
			alert('이름은 반드시 입력해야 합니다.')
			$('#strName').focus();
			return;
		}
		
		// id 가 비어있으면
		if($('#id').val() == '') {
			$.post('/insert',$('form').serialize(),
					function(result){
				$('#listBtn').click() // insert 후 서버로부터 OK가 오면
									  // listBtn 버튼을 클릭실행
				
				$('input').val(''); // 입력 박스의 값을 비우기
			})
		// id 값이 있으면
		} else {
			$.post('/update',$('form').serialize(),
					function(result){
				$('#listBtn').click()
			})
		}
		
	})
	
	$('#listBtn').click(function(){

		$.get('/list',function(result){
			$('#view-list').html(result);
		})
		
	})
	
	$('#listBtn').click()

})
