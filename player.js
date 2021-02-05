class Player{
    constructor(){
        this.name=null;
        this.index=null;
    }

    count(){
        database.ref("player_count").on("value",(data)=>{
            player1=data.val();
        });
    }

    updatePlayer_count(count){
        database.ref("/").update({
            player_count: count
        })
    }

    storePlayer(){
        database.ref("players/player"+this.index).set({
            name: this.name

        })
    }
}