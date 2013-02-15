function setupCanvas() {
    var width, height, canvas;
    width = document.documentElement.clientWidth;
    width = width > 600 ? 600 : width;
    height = document.documentElement.clientHeight;
    height = height > 600 ? 300 : height;
    canvas = document.createElement('canvas');
    canvas.id = "canvas1";
    canvas.width = width;
    canvas.height = height;
    canvas.style.background = 'white';
    canvas.style.zIndex = 10;
    canvas.style.position = "absolute";
    canvas.style.top = "0";
    canvas.style.left ="0";
    canvas.style.display = "none";
    document.body.appendChild(canvas);
}
function showCanvas() {
    document.getElementById("canvas1").style.display="inline";
}
