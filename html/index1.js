const clickSound = document.getElementById("clickSound");
const hoverSound = document.getElementById("hoverSound");
const controls = document.querySelectorAll("button, .container1 a");

controls.forEach(function (control) {
    control.addEventListener("mouseenter", function () {
        hoverSound.currentTime = 0;
        hoverSound.play();
    });

    control.addEventListener("click", function () {
        clickSound.currentTime = 0;
        clickSound.play();
    });
});