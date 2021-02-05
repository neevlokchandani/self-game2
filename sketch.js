var pl1,pl2,pl3,pl4,pl5;
var f1;
var gamestate=1;
var gamedata=0,player1=0,player2;
var gameobj;
var database;
var backgroundimg

function preload(){
  backgroundimg=loadImage("c-images/Map.jpg")
}

function setup() {
  database=firebase.database()
  createCanvas(1366,625);
  f1=new form1();
  gameobj=new game1(); 
  gameobj.start();
  gameobj.referGameState();
}

function draw() {
  background("blue"); 
  if(player1===5){
    gameobj.updateGame(1);
  }
  
  drawSprites();
}