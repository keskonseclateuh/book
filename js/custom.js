$(function() {
// OPACITY OF BUTTON SET TO 0%
    //$("#gallery").height($(window).height());
    $(".roll").width($(".titi").width());
    console.log($(".titi").width()) ;
    $(".roll").height($(".titi").height());
$(".roll").css("opacity","0");
 
// ON MOUSE OVER
$(".roll").hover(function () {
 
// SET OPACITY TO 60%
$(this).stop().animate({
opacity: .6
}, "slow");
},
 
// ON MOUSE OUT
function () {
 
// SET OPACITY BACK TO 30%
$(this).stop().animate({
opacity: 0
}, "slow");
});
});


$(window).resize(function() {
    $("#gallery").height($(window).height());

});