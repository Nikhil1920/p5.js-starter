function setup() {
    createCanvas(windowWidth, windowHeight);
    background(220);
}

function draw() {
    if (mouseIsPressed) {
        fill(0);
    } else {
        fill(255);
    }
    ellipse(mouseX, mouseY, 80, 80);
}

// Remove the above functions and add your own
// Build something fun!
