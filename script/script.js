$(function () {

    // //메뉴1
    // $(".main > li").mouseover(function(){
    //     $(this).find(".sub").stop().slideDown();
    // })//main > li").mouseover

    // $(".main > li").mouseout(function(){
    //     $(this).find(".sub").stop().slideUp();
    // })//main > li").mouseout

    //메뉴2
    $(".main > li").hover(function () {
        $(this).find(".sub").stop().slideDown();
    }, function () {
        $(this).find(".sub").stop().slideUp();
    }) //main > li").hover

    //슬라이드
    // $(".fade li").eq(0).show();
    // $(".fade li").eq(1).hide();
    // $(".fade li").eq(2).hide();

    // $(".fade li").hide();
    // $(".fade li").eq(0).show();

    // $(".fade li").hide();
    // $(".fade li").eq(0).show();

    // $(".fade li:gt(0)").hide();

    $(".fade li").eq(0).siblings().hide();

    var n = 0;
    setInterval(function () {
        console.log("nn : ", n)  // 현재 보이는 인덱스번호 
        $(".fade li").eq(n).fadeOut();

        // if (n == 2) {
        //     n = 0;
        // } else {
        //     n++;
        // }//if

        n = (n + 1) % 3

        console.log("n : ", n) // 바뀔 인덱스번호 

        $(".fade li").eq(n).fadeIn();

    }, 1500)//setInterval


//tab
$(".title li").click(function(){
$(".title li").removeClass("on");
$(this).addClass("on");

var j=$(this).index();
console.log("j :", j)

$(".cont_list ul").hide();
$(".cont_list ul").eq(j).css({display:"flex"})

})//title li").click


//pop
$(".pop").hide();
$(".p_click").click(function(){
    $(".pop").show();
})
$(".close").click(function(){
    $(".pop").hide();
})











}) //jquery