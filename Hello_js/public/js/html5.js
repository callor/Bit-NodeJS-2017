$(document).ready(()=>{
	$("#sec1").click(()=>{
		
//		alert($("#sec1").text());
//		$("#sec1").text("우리나라만세")
		$("#sec1").html("<h1>우리나라만세</h1>");
		
	})
	
	$("#sec2").click(()=>{
		$("#sec2").addClass("myclass")
	})
	
	$("#sec3").click(()=>{
		$("#sec2").removeClass("myclass")
	})

	
	// 주석
	$("#btn1").click(()=>{

		/*
		$("#sec1").fadeOut();
		$("#sec2").fadeOut("slow");
		$("#sec3").fadeOut(3000);

		
		$("#sec1").fadeIn();
		$("#sec2").fadeIn("slow");
		$("#sec3").fadeIn(3000);
		*/
		
		$("#sec1").fadeToggle();
		$("#sec2").fadeToggle("slow");
		$("#sec3").fadeToggle(3000);
	})
	
	/*
	 * 여러줄 주석
	 */
	$("#btn2").click(()=>{
		$("#sec1").css("display","none");
	})

	$("#btn3").click(()=>{
		$("#sec1").css("display","block");
	})
	
	
})