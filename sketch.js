function setup(){
  createCanvas(400, 400);
}


//Sequence: State 1: Home screen, State 2: Show colors, State 3: Click colors
//Keep shifting between states 2 and 3 after state 1


//States within gameScene2: "readyState", "watchState", "inputState"
//Maybe make it a function that cycles through 3 smaller functions


let currentScene="homeScene";





function homeScreen(){
    
    gameScene2();

    fill(255,255,255);
    rect(100,100,200,200);
    fill(0,0,0); 
    textSize(20);
    text("SIMON",170,140)

    if(mouseX >= 150 && mouseX <= 250 && mouseY >= 150 && mouseY <= 250){
        fill(0,72,82); //Button color, needs to vary
    }
    else{
        fill(0,225,255);
    }

    rect(150,150,100,100);
    textSize(9);

    if(mouseX >= 150 && mouseX <= 250 && mouseY >= 150 && mouseY <= 250){
        fill(255,255,255);
    }
    else{
        fill(0,0,0)
    }
    
    text("Click this blue button \n to start game",160,200)

        //for home button: 
            //Light color: fill(0,225,255);
            //Dark color:  fill(0,72,82);
    
}


//Don't use "subfunctions". Instead, use "substates. 

//ready, watch, input, output




let currentState="ready";
let readyCounter=0;
let simulatedWatchCounter=0;
let inputState="null";

function gameScene2(){
    background(0,0,0);
    noStroke();
    fill(22,99,0); //Green
    rect(50,50,50,50); //Green
    fill(110,0,0) //Red 
    rect(300,50,50,50); //Red
    fill(100,102,0) //Yellow
    rect(50,300,50,50);//Yellow
    fill(0,23,82); //Blue
    rect(300,300,50,50);//Blue

    if(currentScene==="gameScene"){
        readyCounter+=1;
        if(readyCounter>100){
            simulatedWatchCounter+=1;
            currentState="watch";
        }
        if(simulatedWatchCounter>200){
            currentState="input";
            fill(255,0,0);
            text("click somewhere",200,200);
        }
    }
    


    fill(255,255,255);
    text("readyCounter: "+readyCounter,200,300);
    text("currentState: "+currentState,200,250);
    text("simulatedWatchCounter: "+simulatedWatchCounter,200,310);
    text("inputState: "+inputState,200,320);

}

//These are all states based on where it is. 


function mouseClicked(){
    if(mouseX >= 150 && mouseX <= 250 && mouseY >= 150 && mouseY <= 250 && currentScene==="homeScene"){
        currentScene="gameScene";
    }

    if(mouseX>=50 && mouseX<100 && mouseY>50 && mouseY<100 && currentState==="input"){
        inputState="green";
    }

    else if(mouseX>=300 && mouseX<=350 && mouseY>=50 && mouseY<=100 && currentState==="input"){
        inputState="red";
    }

    else if(mouseX>=50 && mouseX<=100 && mouseY>=300 && mouseY<=350 && currentState==="input"){
        inputState="yellow";
    }

    else if(mouseX>=300 && mouseX<=350 && mouseY>=300 && mouseY<=350 && currentState==="input"){
        inputState="blue";
    }

    //rect(300,300,50,50);//Blue
}

function draw(){

if(currentScene==="homeScene"){    
    homeScreen();
}

if(currentScene==="gameScene"){
    gameScene2();
}





fill(255,255,255);
text("currentScene: "+currentScene,200,350)
  
//Light colors
    //Red fill(255,0,0);
    //Blue fill(0,0,255);
    //Green fill(20, 196, 0);
    //Yellow fill(255,255,0)

//Dark colors
    //Red fill(110,0,0)
    //green fill(22,99,0);
    //yellow fill(100,102,0);
    //blue fill(0,23,82);

}