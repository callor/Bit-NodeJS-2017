$(document).ready(function(){
	
	// 입력박스에서 포커스가 벗어나면
	$('input').blur(function(){
		
		if($(this).attr('id') == 'strEmail'){
			let strEmail = $(this).val();
			
			if(strEmail.length == 0) return
			
			let regExp = /[0-9a-zA-Z][_0-9a-zA-Z-]*@[_0-9a-zA-Z-]+(\.[_0-9a-zA-Z-]+){1,2}$/;
			if(!strEmail.match(regExp)){
				alert('Email 형식이 잘못 되었습니다.')
				$('#strEmail').val('')
				$('#strEmail').focus()
				return false;
			}
			
			$.post('/emailcheck',{strEmail:strEmail},function(result){
				if(result.strEmail == strEmail){
					alert('이미 등록된 Email 입니다')
					$('#strEmail').val('')
					$('#strEmail').focus()
					return;
				}
			})
		}
	})
	
	$('#saveBtn').click(function(){
		let strEmail = $('#strEmail').val()
		let strPassword = $('#strPassword').val()
		let strPassword1 = $('#strPassword1').val()
		
		if(strEmail.length == 0) {
			alert('Email을 입력해 주세요')
			$('#strEmail').focus()
			return false ;
		}
		
		if(strPassword.length < 8) {
			alert('비밀번호는 8자리 이상이어야 합니다')
			$('#strPassword').focus()
			return false;
		}
		
		if(strPassword != strPassword1) {
			alert('비밀번호와 비빌번호 확인이 일치하지 않습니다');
			$('#strPassword').val('')
			$('#strPassword1').val('')
			$('#strPassword').focus()
			return
		}
		
		$.post('/register',
				{strEmail:strEmail,strPassword:strPassword},
				function(result){
					$('#listbody').html(result.strEmail+'<br>'
										+result.strPassword)
		})
	})

	
	$('section').addClass('w3-margin')
	$('label').addClass('w3-text-blue')
	$('input').addClass('w3-input w3-border w3-hover-light-gray')
	$('button').addClass('w3-button')
	
})