status1="";
object_name="";

function setup(){
    canvas = createCanvas(480, 380);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(480, 380);
    video.hide();
}

function start(){
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
    object_name = document.getElementById("input").value;
}

function modelLoaded(){
    console.log('Model Is Loaded!');
    status1 = true;
}

function draw(){
    image(video, 0, 0, 480, 380);
}