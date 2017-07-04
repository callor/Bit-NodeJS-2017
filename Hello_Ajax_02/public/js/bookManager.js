$(document).ready(function(){
	
	$('#deleteBtn').click(function(){
		if($('#id').val() == ""){
			alert('삭제할 항목을 선택해 주세요')
			return
		}
		if(confirm('정말 삭제 할까요?')){
			var id = $('#id').val();
			$.post('/delete',{id:id})
			$('#listBtn').click()
			$('input').val('')
		}
	})
	$('#newBtn').click(function(){
		$('input').val('')
	})
	$("#listBtn").click(function(){
		$.get('/list',function(result){
			$('#view_right').html(result);
		})
	})
	
	$('#saveBtn').click(function(){
		// id 가 공백이면 새로운 데이터 추가
		if($('#id').val() == "") {
			$.post('/insert',$('form').serialize(),// 직렬화
					function(result){ // 저장이 완료되면
//						if(result.msg == 'OK') {
//							alert('저장이 잘 되었습니다')
//						} else {
//							alert('저장에 실패 했습니다')
//						}
				}); 
		} else {
			$.post('/update',$('form').serialize());
		}
		$('#listBtn').click() // 리스트 버튼을 강제로 클릭
	})
	
	$('#listBtn').click();

})
