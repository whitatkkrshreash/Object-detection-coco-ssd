img="";
status="";
objects= [];
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
    if(status !=""){
        for (i=0;i<objects.length;i++){
            document.getElementById("status").innerHTML="Status: Detected Object";
            Fill("red");
            percent= floor(objects[i].confidence*100);
            text(objects[i].label+""+percent+"%"+ objects[i].x+15, objects[i].y+15);
            nofill();
            stroke("red");
            rect(objects[i].x, object[i].y, objects[i].width, objects[i].height);
        }
    }
}