$(".loading .square .logo-text img").css("width", "220px");
$(".loading .square .logo-text p").css({ width: "230px", transition: "1.2s" });

setTimeout(function () {
$(".loading .square .logo-text p").css({ height: "22px", transition: ".8s" });
}, 1500);

document.onreadystatechange = function () {
if (document.readyState !== "complete") {
    document.querySelector("body").style.overflow = "hidden";
    document.querySelector(".loading").style.visibility = "visible";
} else {
    setTimeout(function () {
    $("loading").fadeOut();
    document.querySelector("body").style.overflow = "visible";
    }, 2500);
}
};