// width and height of window
const WIDTH = window.innerWidth, 
      HEIGHT = window.innerHeight;

var rainDrops;

// run on window load
window.onload = function(e) {

    // canvas setup
    var canvas = document.getElementById("canvas");
    var c = canvas.getContext("2d");
    canvas.width = WIDTH;
    canvas.height = HEIGHT;

    // initial setup
    init();
    
    // main logic loop
    var loop = function() {
        update();
        render(c);
        window.requestAnimationFrame(loop, canvas);
    }
    window.requestAnimationFrame(loop, canvas);
}

function init() {
    
}

function update () {

}

function render(c) {

    // screen fade out effect
    c.fillStyle = "black";
    c.globalAlpha = 0.2;
    c.fillRect(0, 0, WIDTH, HEIGHT)
    c.globalAlpha = 1;
}