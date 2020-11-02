class Game{
    constructor(){

    }
    getState(){
       var gameStateref = database.ref("gameState")
       gameStateref.on("value",function(data){
           gameState = data.val()
       })
    } 
    update(state){
        database.ref("/").update({
            gameState:state
        })
    }
    async start(){
        console.log("start"+gameState)
        if(gameState === 0){
            player = new Player()
            var playerCountref = await database.ref("playerCount").once("value")
            if(playerCountref.exists()){
                playerCount = playerCountref.val()
                player.getCount()
            }
            
            form = new Form()
            form.display();
        }
        paddle = new InvisibleSprite(730,200,20,20)
        paddle1 = new InvisibleSprite(730,1100,20,20)
        striker = createSprite(100,200)
        striker.addImage(strikerImg)
        striker.scale = 0.15
        wall1 = createSprite(420,380,10,520)
        wall2 = createSprite(940,380,10,520)
        wall3 = createSprite(680,120,520,10)
        wall4 = createSprite(680,640,520,10)
        for(var i = 655; i < 730; i+= 30 ) {
            var blackCoins = createSprite(i,420,20,20)
            blackCoins.addImage(blackImg);
            blackCoins.scale = 0.15;
            coinsGroup.add(blackCoins)
            }
        for(var i = 640; i < 740; i+= 30 ) {
                var blackCoins = createSprite(i,370,20,20)
                blackCoins.addImage(blackImg);
                blackCoins.scale = 0.15;
                coinsGroup.add(blackCoins)
                }
        for(var i = 640; i < 740; i+= 30 ){
                var whiteCoins = createSprite(i,390,20,20)
                whiteCoins.addImage(whiteImg);
                whiteCoins.scale = 0.15;
                coinsGroup.add(whiteCoins);
              }
        for(var i = 650; i < 730; i+= 30 ){
                var whiteCoins = createSprite(i,335,20,20)
                whiteCoins.addImage(whiteImg);
                whiteCoins.scale = 0.15;
                coinsGroup.add(whiteCoins);
              }
        chain = new SlingShot(paddle.body,{x:730,y:200})
        
    }          
    end(){
        console.log("gameEnded")
        console.log(player.rank)
    }
    play(){
        Engine.update(engine);
        form.hide()
        textSize(30)
        text("Game Start",120,100)
        Player.getPlayerInfo()
        if(allPlayers!==undefined){
            background("#p687ab")
            image(boardImage,380,80,600,600)
            striker.x = paddle.body.position.x
            striker.bounceOff(wall1)
            striker.bounceOff(wall2)
            striker.bounceOff(wall3)
            striker.bounceOff(wall4)
            
            for(var i = 0; i<coinsGroup.length; i= i+1){
                coinsGroup.get(i).collide(wall1)
                coinsGroup.get(i).collide(wall2)
                coinsGroup.get(i).collide(wall3)
                coinsGroup.get(i).collide(wall4)
                coinsGroup.get(i).bounceOff(striker)
                console.log(coinsGroup.get(i).velocityY)
                onsole.log(coinsGroup.get(i).velocityX)
            }
            paddle.display();
        }
        drawSprites();
    }
}