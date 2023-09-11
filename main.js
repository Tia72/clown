noseX = 0;
noseY = 0;

clown_nose = "";

function prelode(){
    clown_nose = loadImage("https://i.postimg.cc/PfVpWB1K/lown-nose.jpg");
}

function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log("poseNet is initialized");
}

function ts(){
    save("filter_pic.png");
}

function gotPoses(results){
    if (results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("Value of nose X = " + noseX + ", Value of nose Y" + noseY);
    }
}

function draw(){
    image(video, 0, 0, 300, 300);
    fill("red");
    stroke("black");
    circle(noseX, noseY, 20);
    image(clown_nose, noseX, noseY, 30, 30);
}