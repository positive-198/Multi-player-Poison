class Game {
  constructor(){

  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
        
        
      }
      form = new Form()
      form.display();
    }
   
   zombie = createSprite(200,400);
    play1 = createSprite(700,200);
    play2 = createSprite(700,220);
   play3 = createSprite(700,240);
    play4 = createSprite(700,260);
   players= [play1, play2, play3, play4];

  play1.addAnimation("play1",p1);
  play2.addAnimation("play2",p2);
  play3.addAnimation("play3",p3);
  play4.addAnimation("play4",p4);
  zombie.addAnimation("zombie",zom);


  }

  play(){
    form.hide();
    

    Player.getPlayerInfo();
    //player.getcarsatend();

    if(allPlayers !== undefined){
      //var display_position = 100;
      background(ground);
      
      //index of the array
      var index = 0;

      //x and y position of the cars
      var x = 250;
      var y;

      for(var plr in allPlayers){
        //add 1 to the index for every loop
        index = index + 1 ;
        

        //position the cars a little away from each other in x direction
        x = x + 200;
       y = y + 200;
        //use data form the database to display the cars in y direction
        

       // players[index-1].x = x;
       // players[index-1].y = y;
       
       if(index=== player.index){
       fill("red")
        text(player.name,x-580,y)
        
       }


         // if(keyDown("space")){
           // player.velocityY =-10;
          // }
        
       
        //textSize(15);
        //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
      }
     
    }
  
    if(keyIsDown(RIGHT_ARROW)&& players.index !== null){
      players.distance = +10
      players.update();
    }

    if(keyIsDown(LEFT_ARROW)&& players.index !== null){
      players.distance = -10
      players.update();
    }
    
  
    drawSprites()
  }

}