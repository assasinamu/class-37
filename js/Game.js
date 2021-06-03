class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  play(){
    form.hide()
    text("game",100,100)
    Player.getPlayerInfo()
    if(allPlayers!=undefined){
    var pos = 150
    for(var p in allPlayers){
    if(p=="player"+player.index){
    fill("red")
    }
    else{fill("black")}
    text(allPlayers[p].name+" "+allPlayers[p].distance,100,pos)
    pos= pos+30
    }
    }
    if(keyIsDown(UP_ARROW)){
    player.distance=player.distance+50
    player.update()
    }
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  start(){
    if(gameState === 0){
      player = new Player();
      player.getCount();
      form = new Form()
      form.display();
    }
  }
}
