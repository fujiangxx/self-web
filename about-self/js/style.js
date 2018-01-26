$(function () {
    $(".modal-close").click(function(){
        $(".modal-content").css({display:"none"});
    });
    $(".modal-trigger").click(function(){
        $(".modal-content").css({display:"block"});
    })

})