function preload()
{
clownnose=loadImage("https://i.postimg.cc/qqSbKcrV/clownnose.png");
}
function setup()
{
    canvas=createCanvas(400,400);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    posenet=ml5.poseNet(video,modelLoaded);
    posenet.on('pose',gotposes)
}
nosex=0;
nosey=0;
function draw()
{
image(video,0,0,400,400);
/*
fill(255,0,0);
stroke(255,0,0);
circle(nosex,nosey,20);
*/
image(clownnose,nosex,nosey,30,30);
}
function take_snapshot()
{
    save("my_image.png");
}
function gotposes(results)
{
    if(results.length>0)
    {
        console.log(results);
        console.log("nose x="+results[0].pose.nose.x);
        console.log("nose y="+results[0].pose.nose.y);
        nosex=results[0].pose.nose.x-105;
        nosey=results[0].pose.nose.y-65;

    }
}
function modelLoaded()
{
    console.log("model is loaded");
}