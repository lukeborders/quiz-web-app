"use strict";
$(document).ready(function(){
$("input").click(function(){
    $(".quiz-text").hide();
    $("#button1").hide();
    $("#button2").show();
    $("#answer1").show();
    $("#answer2").show();
    $("#q1").show();
	$("#q1a1").show();
	$("#q1a2").show();
});
	//calls function question1Answer1
    $("#answer1").click(function(){
 	question1Answer1();
});
	//calls function question1Answer2
 	$("#answer2").click(function(){
 	question1Answer2(); 
});
	//calls function button3q1
 	$("#button3").click(function(){
 	button3q1();
});
	//calls function question2answer2
 	$("#answer2-2").click(function(){
	question2answer2();
});
	// calls function question2answer1
	$("#answer1-2").click(function(){
	question2answer1();
});
	//calls button3q2
	$("#button31").click(function(){
	button3q2();
});
	// calls question3answer1
	$("#answer1-3").click(function(){
	question3Answer1();
});
	// calls finish
	$("#button4").click(function(){
	finish();
});
	$("#goback").click(function(){
	goback();
});
	$("#button2").click(function(){
	gobackq1();
});
	$("#button21").click(function(){
	gobackq2();	
});
	$("#button22").click(function(){
	gobackq3();
});
	$("#answer2-3").click(function(){
	question3answer2();
});
});
// hides question2; shoes correct id; shows button3
function question2answer2(){
	$("#q2").hide();
	$("#correct").show();
	$("#button31").show();
	$("#q1").hide();
	$("#answer1-2").hide();
	$("#answer2-2").hide();
	$("#answer1").hide();
	$("#answer2").hide();
	$("#button2").hide();
	$("#button21").hide();
	$("#q1a1").hide();
	$("#q1a2").hide();
	$("#q2a1").hide();
	$("#q2a2").hide();
	
}
// shows fail id; hides question2;hides answers1-2 and 2-2
function question2answer1(){
	$("#fail").show();
	$("#q2").hide();
	$("#q1").hide();
	$("#answer1-2").hide();
	$("#answer2-2").hide();
	$("#answer1").hide();
	$("#answer2").hide();
	$("#button2").hide();
	$("#button2").hide();
	$("#button21").show();
	$("#fail-img").show();
	$("#q1a1").hide();
	$("#q1a2").hide();
	$("#q2a1").hide();
	$("#q2a2").hide();
}
// hides correct id; hides question1; shows question2; hides button3; shows answers1-2 and 2-2; hides answers 2 and 1
function button3q1() {
 	$("#correct").hide();
 	$("#q1").hide();
 	$("#q2").show();
	$("#answer1").hide();
	$("#answer2").hide();
 	$("#button3").hide();
	$("#answer1-2").show();
	$("#answer2-2").show();
	$("#button21").show();
	$("#button2").hide();
	$("#q1a1").hide();
	$("#q1a2").hide();
	$("#q2a1").show();
	$("#q2a2").show();
}
// hides correct id; hides question2, shows question3, hides question1, hides answer1, hides answer2, hides answer 1-2,2-2and button31; shows answer1-3 //and 2-3
function button3q2() {
	$("#correct").hide();
	$("#q2").hide();
	$("#q3").show();
	$("#q1").hide();
	$("#answer1").hide();
	$("#answer2").hide();
	$("#answer1-2").hide();
	$("#answer2-2").hide();
	$("#answer1-3").show();
	$("#answer2-3").show();
	$("#button31").hide();
	$("#button22").show();
	$("#button2").hide();
	$("#button21").hide();
	$("#q1a1").hide();
	$("#q1a2").hide();
	$("#q2a1").hide();
	$("#q2a2").hide();
	$("#q3a1").show();
	$("#q3a2").show();
	}	
// hides question1;shows fail id;hides answers 1 and 2; hides button2
function question1Answer2() {
	$("#q1").hide();
 	$("#fail").show();
 	$("#answer2").hide();
 	$("#answer1").hide();
	$("#fail-img").show();
	$("#q1a1").hide();
	$("#q1a2").hide();
 	}
//hides question1;shows correct id;shows button3;hides answers2 and 1
function question1Answer1() {
    $("#q1").hide();
 	$("#correct").show();
 	$("#button3").show();
 	$("#answer2").hide();
 	$("#answer1").hide();
	$("#button2").hide();
	$("#q1a1").hide();
	$("#q1a2").hide();
	}
// hides answer 1, 2 , 1-2, 2-2, 1-3, and 2-3, hides button2 and shows button 32, hides question1 and hides question3, shows correct
function question3Answer1(){
	$("#answer1").hide();
	$("#answer2").hide();
	$("#answer1-2").hide();
	$("#answer2-2").hide();
	$("#answer1-3").hide();
	$("#answer2-3").hide();
	$("#button2").hide();
	$("#button32").show();
	$("#q1").hide();
	$("#q3").hide();
	$("#correct").show();
	$("#button4").show();
	$("#button32").hide();
	$("#button22").hide();
	$("#q1a1").hide();
	$("#q1a2").hide();
	$("#q2a1").hide();
	$("#q2a2").hide();
	$("#q3a1").hide();
	$("#q3a2").hide();
	
}
function question3answer2(){
	$("#button21").hide();
	$("#button2").hide();
	$("#answer1").hide();
	$("#answer2").hide();
	$("#answer1-2").hide();
	$("#answer2-2").hide();
	$("#answer1-3").hide();
	$("#answer2-3").hide();
	$("#q1").hide();
	$("#q3").hide();
	$("#q1a2").hide();
	$("#q1a1").hide();
	$("#q2a1").hide();
	$("#q2a2").hide();
	$("#q3a1").hide();
	$("#q3a2").hide();
	$("#fail").show();
	$("#fail-img").show();
}
function finish(){
	$("#answer1-3").hide();
	$("#answer2-3").hide();
	$("#button32").hide();
	$("#button4").hide();
	$("#button2").hide();
	$("#answer1-2").hide();
	$("#answer2-2").hide();
	$("#answer1").hide();
	$("#answer2").hide();
	$(".winner p").show();
	$("#correct").hide();
	$("#q1").hide();
	$("#q2").hide();
	$("#q3").hide();
	$("#win-img").show();
	$("#q1a1").hide();
	$("#q1a2").hide();
}
function goback(){
	$("#winner1").hide();
	$("#winner2").hide();
	$("#goback").hide();
	$("#answer1").hide();
	$("#answer2").hide();
	$("#answer1-2").hide();
	$("#answer2-2").hide();
	$("#answer1-3").hide();
	$("#answer2-3").hide();
	$("#q1").hide();
	$("#q2").hide();
	$("#q3").hide();
	$("#button3").hide();
	$("#button2").hide();
	$("#button4").hide();
	$("#button1").show();
	$(".quiz-text").show();
	$(".winner p").hide();
	$("#fail-img").hide();
	$("#win-img").hide();
}
function gobackq1(){
	$(".quiz-text").show();
	$("#button1").show();
	$("#answer1").hide();
	$("#answer2").hide();
	$("#q1").hide();
	$("#button2").hide();
	$("#fail").hide();
	$("#correct").hide();
	$("#fail-img").hide();
	$("#q1a1").hide();
	$("#q1a2").hide();
}
function gobackq2(){
	$(".quiz-text").show();
	$("#button1").show();
	$("#answer1").hide();
	$("#answer2").hide();
	$("#answer1-2").hide();
	$("#answer2-2").hide();
	$("#button21").hide();
	$("#q1").hide();
	$("#q2").hide();
	$("#button2").hide();
	$("#correct").hide();
	$("#fail").hide();
	$("#fail-img").hide();
	$("#q1a1").hide();
	$("#q1a2").hide();
	$("#q2a1").hide();
	$("#q2a2").hide();
}
function gobackq3(){
	$(".quiz-text").show();
	$("#button1").show();
	$("#answer1").hide();
	$("#answer2").hide();
	$("#answer1-2").hide();
	$("#answer2-2").hide();
	$("#button21").hide();
	$("#q1").hide();
	$("#q2").hide();
	$("#button2").hide();
	$("#button21").hide();
	$("#answer1-3").hide();
	$("#answer2-3").hide();
	$("#q3").hide();
	$("#correct").hide();
	$("#fail").hide();
	$("#button22").hide();
	$("#fail-img").hide();
	$("#q3a1").hide();
	$("#q3a2").hide();
	$("#q1a1").hide();
	$("#q1a2").hide();
}

