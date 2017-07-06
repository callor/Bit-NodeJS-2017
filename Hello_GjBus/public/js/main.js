$(document).ready(function(){
	$('#strStation').keypress(function(e){

		if(e.keyCode == 13) { // Enter 입력하면
			$.post('/gjbus/station',{station:$('#strStation').val()},
					function(result){
				$('#listbody').html(result);
			})
			//alert($('#strStation').val())
		}  
	})
})
