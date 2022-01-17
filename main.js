song1 = "";
song2 = "";

function preload()
{
    song1 = loadSound("CT.mp3");
    song2 = loadSound("HP.mp3");
}

function setup()
{
    canvas = createCanvas(450,400);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}

function draw()
{
    image(video, 0, 0, 450, 400); 
}