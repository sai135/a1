song="";
song1="";
leftWristx="";
leftWristy="";
rightWristx="";
rightWristy="";
function preload() {
    song=loadSound("music.mp3");
    song1=loadSound("music2.mp3")
    }
    function setup() {
        canvas=createCanvas(600,500);
        canvas.center();
        video=createCapture(VIDEO);
        video.hide();
        poseNet=ml5.poseNet(video,modelLoaded);
        poseNet.on('pose', gotPoses)
    }
    function modelLoaded() {
        console.log('peseNet is Intialized');
    }
    function gotPoses(results) {
        if(results.length > 0) {
            console.log(results);
            leftWristx=results[0].pose.leftWrist.x;
            leftWristy=results[0].pose.leftWrist.y;
            console.log("leftWristx = "+leftWristx+"leftWristy = "+leftWristy);
            rightWristx=results[0].pose.rightWrist.x;
            rightWristy=results[0].pose.rightWrist.y;
            console.log("rightWristx = "+rightWristx+"rightWristy = "+rightWristy);
        }
    }
    function draw() {
        image(video, 0, 0, 600, 500);
    }