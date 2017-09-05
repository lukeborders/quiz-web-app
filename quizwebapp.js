$(document).ready(function(){
$("input").click(function(){
    $(".quiz-text").hide();
    $("#button1").hide();
    $("#button2").show();
    $("#answer1").show();
    $("#answer2").show();
    $("#q1").show();
});
    $("#button2").click(function(){
    $(".quiz-text").show();
    $("#button1").show();
    $("button2").hide();
    });
    function question1Answer1() {
    	$("#q1").hide();
 			$("#correct").show();
 			$("#button3").show();
 			$("#answer2").hide();
 			$("#answer1").hide();
 		  }
 		  $("#answer1").click(function(){
 		  	question1Answer1();
 		  });
 	function question1Answer2() {
			$("#q1").hide();
 				$("#fail").show();
 				$("#answer2").hide();
 				$("#button2").hide();
 				$("#answer1").hide();
 	}
 		$("#answer2").click(function(){
 			question1Answer2(); 
 		});
 			
 		});
		function button3() {
 			$("#correct").hide();
 			$("#q1").hide();
 			$("#q2").show();
 			$("#button3").hide();
 		}
 		$("#button3").click(function(){
 			button3();
 		});
 			function question2Answer2() {
 					$("#q2").hide();
 					$("#correct").show();
 					$("#answer1").hide();
 					$("#answer2").hide();
 					$("#button3").show();
 			}
 			$("answer2").click(function(){
 				question2Answer2();
 			});
 			

