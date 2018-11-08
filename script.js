// width and height of window
const WIDTH = window.innerWidth, 
      HEIGHT = window.innerHeight;

// array containing droplet positions
var raindrops;

// size of droplets in pixels
var dropSize = 10;

// chars to be displayed
var charSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// run on window load
window.onload = function(e) {

    // canvas setup
    var canvas = document.getElementById("canvas");
    var c = canvas.getContext("2d");
    canvas.width = WIDTH;
    canvas.height = HEIGHT;

    // initial setup
    init(c);
    
    // main logic loop
    var loop = function() {
        update();
        render(c);
        window.requestAnimationFrame(loop, canvas);
    }
    window.requestAnimationFrame(loop, canvas);
}

function init(c) {

    // initialize raindrops array
    raindrops = new Array(Math.round(WIDTH / dropSize));
    for (var i = 0; i < raindrops.length; i++) {
        raindrops[i] = Math.random() * HEIGHT / dropSize;
    }

    // set font and font size
    c.font = "bold " + dropSize + "px Arial";
}

function update () {

    // update raindrop positions
    for (var i = 0; i < raindrops.length; i++) {
        raindrops[i] += 1;
        if (raindrops[i] > HEIGHT / dropSize) {
            raindrops[i] = 0;
        }
    }
}

function render(c) {

    // render raindrops
    for (var i = 0; i < raindrops.length; i++) {

        // generate and set random color
        c.fillStyle = Math.random() >= 0.25 ? "crimson" : "darkorchid";

        // choose and render char form char set
        var randomChar = charSet.charAt(Math.round(Math.random() * charSet.length));
        c.fillText(randomChar, i * (WIDTH / raindrops.length), raindrops[i] * dropSize);
    }

    // screen fade out effect
    c.fillStyle = "rgb(5, 0, 13)";
    c.globalAlpha = 0.038;
    c.fillRect(0, 0, WIDTH, HEIGHT)
    c.globalAlpha = 1;
}