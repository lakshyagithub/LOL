function setup() {
    canvas=createCanvas(280, 280);
    canvas.center();
    background("#5f9ea0");
}
function clearCanvas() {
    background("#5f9ea0");
}
if (navigator.userAgent.indexOf("Chrome") != -1) {
    console.log("Google Chrome");
}
else if (navigator.userAgent.indexOf("Firefox") != -1) {
    console.log("Firefox");
}