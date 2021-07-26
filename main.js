var rightWristX,rightWristY,score;
function setup(){
  var canvas =  createCanvas(600,500);
  canvas.parent('canvas')
	video = createCapture(VIDEO);
  video.hide();

  poseNet = ml5.poseNet(video,modelLoaded)
  poseNet.on('pose',gotResults);
}

function draw(){
  image(video,0,0,600,500)
  
  if(score > 0.2){
    fill('#679ed8');
    stroke('#cfddf7')
    strokeWeight(3)

    circle(rightWristX,rightWristY,20);
  }
}

function modelLoaded(){
  console.log("Model Loaded")
}

function gotResults(results){
  if(results.length > 0){
    console.log(results);
    rightWristX = results[0].pose.rightWrist.x;
    rightWristY = results[0].pose.rightWrist.y;
    score = 10;

    console.log(rightWristX);
    console.log(rightWristY);
  }
}