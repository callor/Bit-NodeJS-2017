$(document).ready(function(){

	$('section').addClass('w3-margin w3-padding-16')
	
	$('label').addClass('w3-text-blue')
	$('label').addClass('w3-col l1 m1 s1')
	$('input').addClass('w3-input w3-border w3-hover-light-gray')
	$('input').addClass('w3-col l3 m3 s3')
	
	$('#strName').addClass('w3-col l7 m7 s7')
	$('#intTotal').addClass('w3-col l5 m5 s5')
	$('#intAvg').addClass('w3-col l5 m5 s5')
	
	// 제거할때,
	//$('input').removeClass('w3-col')
	
	$('#newBtn').click(function(){
		$('input').val('')
	})
	
	// 리스트를 불러와서 <section id=list_body>에 html로 붙여 넣기
	$('#listBtn').click(function(){
		$.get('/list',function(result){
			$('#list_body').html(result)
		})
	})
	
	$('#saveBtn').click(function(){
		
		if($('#strNum').val() == ''){
			alert('학번을 입력하세요')
			$('#strNum').focus()
			return
		}
		if($('#strName').val() == ''){
			alert('이름을 입력하세요')
			$('#strName').focus()
			return
		}
		if($('#id').val() == '' ) {
			$.post('/insert',$('form').serialize(),function(result){
				$('#id').val(result._id);
			})
		} else {
			$.post('/update',$('form').serialize(),function(result){
				// $('#id').val(result._id);
			})
		}
		$('#listBtn').click();
		
	})
	
	$('input').blur(function(event){
		
		// 학번을 입력하고 포커스를 벗어나면
		// 학번 중복 체크를 한다.
		if($(this).attr('id') == 'strNum'){
			// 새로 작성중일때만 중복검사.
			// 수정일때는 중복검사 안함
			if($('#id').val() == ''){
				let strNum = $('#strNum').val()
				$.post('/numcheck',{strNum:strNum},function(result){
					if(result.count > 0) {
						alert('이미 등록된 학번입니다. 다시 입력해 주세요')
						$('#strNum').val('')
						$('#strNum').focus()
						return
					}
				})
			}
		}
										// OR
		if($(this).attr('id') == 'intKor' || 
		   $(this).attr('id') == 'intEng' ||
		   $(this).attr('id') == 'intMath' ) {
			
			// 각 입력박스에서 값 추출
			var intKor = 1*$('#intKor').val();
			var intEng = 1*$('#intEng').val();
			var intMath = 1*$('#intMath').val();
			
			// 추출한 값을 합산
			var sum = intKor + intEng + intMath;
			
			// total 입력박스에 합계 표시
			$('#intTotal').val(sum)
			if(sum > 0) {
								// 정수로 변환
				$('#intAvg').val(parseInt(sum/3))	
			}
			
		}
	})
	$('#deleteBtn').click(function(){
		if($('#id').val() == '') {
			alert('삭제할 항목을 선택하세요')
			return
		}
		if(confirm('정말 삭제 하시겠습니까')){
			$.post('/delete',{id:$('#id').val()},function(result){
				$('#listBtn').click();
			})
		}
	})
	
	$('#listBtn').click();
})
