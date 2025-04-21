const wrapper = document.querySelector(".wrapper");
const registerLink = document.querySelector(".register-link");
const loginLink = document.querySelector(".login-link");

registerLink.onclick = () => {
wrapper.classList.add("active");
};

loginLink.onclick = () => {
wrapper.classList.remove("active");
};


// ##############



let percentage = 0; // البداية من 0%
const interval = setInterval(() => {
    if (percentage <= 100) {
        // تحديث الخلفية
        $(".load-circle").css("background", `conic-gradient(#00a6fe 0%, #21cfc8  ${percentage}%, transparent ${percentage}%)`);

        $(".load-circle span").html(percentage+"%")
        percentage++; // زيادة النسبة
    } else {
        clearInterval(interval); // إيقاف التحديث
        $(".load-circle").css("width", `80px`);
        $(".load-circle span").css("font-size", `14px`);
        $(".shape .line").css("transform","scaleY(1)")
        $(".shape .data").css("width","250px")
        setTimeout(function(){
            $(".fixed-layer").fadeOut()
        },2500)
    }
}, 30); // التحديث كل 30 مللي ثانية