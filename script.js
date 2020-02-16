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

    // create gradient fill
    var g = c.createLinearGradient(0, 0, WIDTH, 0);
    g.addColorStop(0, "rgb(5, 0, 33)");
    g.addColorStop(.4, "rgb(123, 26, 82)");
    g.addColorStop(.475, "rgb(135, 29, 90)");
    g.addColorStop(.525, "rgb(135, 29, 90)");
    g.addColorStop(.6, "rgb(123, 26, 82)");
    g.addColorStop(1, "rgb(5, 0, 33)");

    // screen fade out effect
    c.fillStyle = g;
    c.globalAlpha = 0.038;
    c.fillRect(0, 0, WIDTH, HEIGHT)
    c.globalAlpha = 1;

    // render raindrops
    for (var i = 0; i < raindrops.length; i++) {

        // generate and set random color
        c.fillStyle = Math.random() >= 0.25 ? "crimson" : "darkorchid";

        // choose and render char form char set
        var randomChar = charSet.charAt(Math.round(Math.random() * charSet.length));
        c.fillText(randomChar, i * (WIDTH / raindrops.length), raindrops[i] * dropSize);
    }
}