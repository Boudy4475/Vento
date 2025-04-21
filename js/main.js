$(".oppening .box .logo-text img").css("width", "220px")
$(".oppening .box .logo-text p").css({ "width": "230px", "transition": "1.2s" })

setTimeout(function () {
    $(".oppening .box .logo-text p").css({ "height": "22px", "transition": ".8s" })
}, 1500)

document.onreadystatechange = function () {
    if (document.readyState !== "complete") {
        document.querySelector("body").style.overflow = "hidden";
        document.querySelector(".oppening").style.visibility = "visible";
    } else {
        setTimeout(function () {
            $(".oppening").fadeOut();
            document.querySelector("body").style.overflow = "visible";
        }, 2500)
    }
};


$(".team .card button").click(function(){
    $(this).closest(".card").toggleClass("active")
})


$(".nav-son .close-btn").click(function(){
    $(".nav-son").removeClass("mobile-active")
})

$(".nav-btn").click(function(){
    $(".nav-son").addClass("mobile-active")
})

$(".logo").click(function () {
    // تعطيل scroll-behavior:smooth
    $("html").css("scroll-behavior", "auto");

    // بدء الحركة
    $("html, body").animate({ scrollTop: 0 }, 1000, function () {
        // إعادة scroll-behavior:smooth عند الانتهاء
        $("html").css("scroll-behavior", "smooth");
    });
});

