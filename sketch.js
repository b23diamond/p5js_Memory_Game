function setup(){
  createCanvas(400, 400);
}


//Sequence: State 1: Home screen, State 2: Show colors, State 3: Click colors
//Keep shifting between states 2 and 3 after state 1




function gameScene2(){
    background(0,0,0);
    noStroke();
    fill(22,99,0);
    rect(50,50,50,50);
    fill(110,0,0)
    rect(300,50,50,50);
    fill(100,102,0)
    rect(50,300,50,50);
    fill(0,23,82);
    rect(300,300,50,50);
}

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
    fill(0,0,0); //Text color, needs to vary
    text("Click this blue button \n to start game",160,200)

        //for home button: 
            //Light color: fill(0,225,255);
            //Dark color:  fill(0,72,82);
    

}




function draw(){
homeScreen();

  
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