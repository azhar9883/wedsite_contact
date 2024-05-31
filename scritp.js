
function show() {
    console.log("hello")
    var tog = document.getElementById('nav-bar');
    if (tog.style.opacity === "0") {
        tog.style.opacity = "1";
    } else {
        tog.style.opacity = "0";
    }
}
