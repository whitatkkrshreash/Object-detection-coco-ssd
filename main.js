img="";
status="";
function preload(){
    img =loadImage("dog_cat.jpg");
}
function setup(){
    canvas= createCanvas(640,420);
    canvas.center();
    objectdetector= ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Status: Detecting Object";
}
function modelLoaded(){
    console.log("Model Loaded Succesfuly, Btw why are you in the console?");
    status=true;
    objectdetector.detect(img,gotResult);    
}
function gotResult(error,results){
    if (error){
        console.log("Error occured use the app properly,Idiot");
    }
    console.log(results);
}
function draw(){
    //dog
    image(img,0,0,640,420);
    text("Dog",45,75);
    noFill();
    stroke("#FF0000");
    rect(30,60,450,350);

    //Cat
    text("Cat",320,120);
    noFill();
    stroke("#FF0000");
    rect(300,90,270,320);
}