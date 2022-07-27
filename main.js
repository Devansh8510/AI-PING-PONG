status="";
objects=[];

function setup(){
    canvas=createCanvas(400,600);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(400,600);
    
}

function start() {
    loadm=ml5.objectDetector("cocossd",modeloaded);
    document.getElementById("status1").innerHTML="Status:Detecting Objects";
    object23=document.getElementById("object_name1").value;
}
function modeloaded() {
    console.log("Your model has been loaded");
    status=true;
}
function draw() {
    image(video,0,0,400,600);
    if (status!="") {
        for (let counter = 0; counter < objects.length; counter++) {
            loadm.detect(video,gotresult);
            percent=floor(objects[counter].confidence*100);
            label1=objects[counter].label;
            fill("Red");
            stroke("blue");
            noFill();
            text(label1+" "+percent+"%",objects[counter].x+15,object[counter].y+15);
            rect(object[counter].width,object[counter].height,object[counter].x,object[counter].y);
            if(label1==object23){
                video.stop();
                loadm.detect(gotresult);
                document.getElementById("status1").innerHTML=objects23+" Found"
            }
        }

    }
}

function gotresult(error,results) {
    if(error){
        console.log(error);
    }
    console.log(results);
    objects=results;
}
























































