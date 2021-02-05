class game1{
    constructor(){}

    referGameState(){
        database.ref("GameState").on("value",(data)=>{
            gamedata=data.val();
        });
    }

        updateGame(data1){
            database.ref("/").update({
                GameState: data1
            })
        }

        start(){
            
            if(gamedata===0){
                player2=new Player();
                player2.count();
                f1.display();
            }

        }

        play(){
            if(gamedata===1){
                background(backgroundimg)
            }
        }
}