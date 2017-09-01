$(document).ready(function(){
$("input").click(function(){
    $(".quiz-text").hide();
    $("#button1").hide();
    $("#button2").show();
    $("#answer1").show();
    $("#answer2").show();
    $("#question1").show();
});
    $("#button2").click(function(){
    $(".quiz-text").show();
    $("#button1").show();
    $("button2").hide();
    });
 /*$("#answer1","#answer2").click(function() {
    if($("#answer1").click()){
        $("question1").hide();
        
    }*/
});
