var ladrao,diamante,laser1,laser2,paredes
var estadojogo

function setup() {
 createCanvas(400, 400) 
montarjogo() 
  estadojogo = "parado"
}


function draw() {
   background(0);
 
  drawSprites();
  
  if (estadojogo == "parado"){
    
    textSize(20)
    fill("white")
    text("pressione ESPACO para iniciar",60,180)
    
    if(keyDown("SPACE")){
      laser1.velocityY = 5
      laser2.velocityY = -5
      estadojogo = "play"
    }
    
  }
  
  
  
   if (estadojogo == "play" ){
     
     laser1.bounceOff(paredes)
     laser2.bounceOff(paredes)
     
     if(keyDown( "left")){
       
       ladrao.x = ladrao.x - 4
     }else if(keyDown("right")){
       
       ladrao.x = ladrao.x + 4
       
    
     }else if(keyDown("up")){
       
       ladrao.y = ladrao.y -4 
     }else if(keyDown("Down")){
       ladrao.y = ladrao.y + 4
     }
    ladrao.collide(paredes)  
     
  if(
     
     
     ladrao.isTouching(laser1)||
     ladrao.isTouching(laser2)
     ){

     estadojogo = "gameover"
    
  } 
     
     if(ladrao.isTouching(diamante)){
       
       estadojogo = 'winner'
       
     }
   
  
   }   
  
   
   if(estadojogo == "gameover"){
     fimdejogo()
     
 fill('white')    
 textSize(30)  
 text('perdeu playboy',50,200) 
     
     
      textSize(15) 
    text('Pressione R para reniciar',100,250)  
     
     
       if(keyDown("r")){
      estadojogo = 'parado'
      montarjogo()
      
    }
     
     
   }
  
  
  
     
  
   if(estadojogo == "winner"){
     
     fimdejogo()
     textSize(30)
     fill("white")
     text('eu to riiiiiicoooooo',50,200)
     textSize(15)
     text('Pressione R para reniciar',100,250)
     
     if(keyDown("r")){
       
     estadojogo = "parado"
    montarjogo()
     } 
   }
     
   
   
  

}



function montarjogo(){
  ladrao = createSprite(200,390,20,20)
  diamante = createSprite(360,20,20,20)
  laser1 = createSprite(100,200,200,10)
  laser1.shapeColor = "red"
  laser2 = createSprite(300,200,200,10)
  laser2.shapeColor = "red"
  
  ladrao.shapeColor = "purple"
   diamante.shapeColor = "blue"

  paredes = createEdgeSprites()
}

function fimdejogo(){
ladrao.remove()
diamante.remove()
laser1.remove()
laser2.remove()
    }