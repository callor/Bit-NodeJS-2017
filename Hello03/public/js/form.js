$(document).ready(()=>{

	
	// keypress : 키보드를 눌렀을때,누르는동안 계속
	// keydown : 키보드를 눌렀을때, ctrol,shift,alt 감지, 한번만
	// keyup : 키보드에서 손을 뗏을때
	
	$('input').keydown(function(event){
		
//		alert(event.keyCode)
		// 눌린키가 Enter가 아니면 진행 금지
		if(event.keyCode != 9) return; // 9 번 Tab key
		var thisId = $(this).attr('id'); 

		
		// and : && 
		// or : thisId값이 intKor 이거나 intEng 이거나 intMath 이면
		if(thisId == 'intKor' || 
			thisId == 'intEng' ||
			thisId == 'intMath' ) sumNum();
		
		$(this).next('p').css('color','red')// .focus();

		
//		if(thisId == 'intKor') sumNum();
//		if(thisId == 'intEng') sumNum();
//		if(thisId == 'intMath') sumNum();
	
	})
	
	$("#saveBtn").click(()=>{
		
		if($("#strName").val() == "") {
			alert("학생이름은 필수항목 입니다")
			$("#strName").focus();
			return;
		}
//		$('form').submit();
		
	})
	
//	$('.input_box').keydown(function(event){
//		if(event.keyCode == 13) $(this).next('.input_box').focus();
//	})
	
	
//	$("#intKor").keydown((event)=>{
//		if(event.keyCode == 13) {
//			sumNum();
//			$("#intEng").focus();
//		}
//	})
//	$("#intEng").keydown((event)=>{
//		if(event.keyCode == 13) {
//			sumNum();
//			$('#intMath').focus();
//		}
//	})
//	$("#intMath").keydown((event)=>{
//		if(event.keyCode == 13) {
//			sumNum();
//			$("savBtn").focus();
//		}
//	})
	
	function sumNum(){
		var intKor = $("#intKor").val();
		var intEng = $("#intEng").val();
		var intMath = $("#intMath").val();
		
		// 문자열을 숫자로
//		var sum = Number(intKor) + Number(intEng) + Number(intMath);
		var sum = (intKor*1) + (intEng*1) + (intMath*1);

		// input text에는 val함수로 값 넣고 읽기
		$("#intTotal").val(""+sum); // 숫자를 문자열로
		
		// 총점이 0 이상일 경우 평균을 구하기
		var avg = sum > 0 ? sum / 3 : 0 ;  
		$("#intAvg").val(avg);
		
	}
	
})


