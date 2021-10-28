

nose_X = 0;
nose_Y = 0;
difference = 0;

leftWristX = 0;
rightWristX = 0;


function setup() {
    video = createCapture(VIDEO);
    video.size(500,500);
    video.position(10,60);


    canvas =  createCanvas(550,500);
    canvas.position(600,75);


    poseNet = ml5.poseNet(video, modelLoaded);




    poseNet.on('pose', gotPoses);
}

function gotPoses(results) {
    if (results.length > 0) 
    {
         console.log(results);
         nose_X = results[0].pose.nose.x;
         nose_Y = results[0].pose.nose.y;
         console.log(" nose_X = " + nose_X  +  " nose_Y = " + nose_Y);

         leftWristX = results[0].pose.leftWrist.x;
         rightWristX = results[0].pose.rightWrist.x;

         difference = floor(leftWristX - rightWristX);
         console.log(" left wrist = " + leftWristX + " right wrist = " + rightWristX + " difference =  " +  difference);

    } 
        
    
}

function modelLoaded() {
    console.log('poseNet is intialized');
}


function draw(){
  background('#FFFF00');

  fill ('#0000FF');
  stroke ('#0000FF');
  square (nose_X , nose_Y , difference);

}