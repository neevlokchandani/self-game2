class form1{
    constructor(){
        this.input1=createInput("Enter Name");
        this.button1=createButton("Next");
        
    }

    display(){
        this.input1.position(400,400);
        this.button1.position(50,600);
        this.button1.mousePressed(()=>{
            this.input1.hide();
            this.button1.hide();
            player2=new Player();
            player2.name=this.input1.value();
            player1=player1+1;
            player2.index=player1;
            player2.updatePlayer_count(player1);
            player2.storePlayer();
        })
    }
}