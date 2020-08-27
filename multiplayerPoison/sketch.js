var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var play1;
var play2;
var play3;
var play4;
var players=[];
var p1;
var p2;
var form, player, game;
var bg;
var zombie;
var zom;
var ground;


function preload(){
bg= loadImage("images/bg.jpg")
ground= loadImage("images/ground.jpg")
p1= loadAnimation("person.png","person1.png","person2.png")
p2= loadAnimation("untitled.png","untitled1.png","untitled2.png")
p3= loadAnimation("man.png","man1.png","man2.png")
p4= loadAnimation("lady.png","lady1.png","lady2.png")
zom= loadAnimation("Zombie.png","Zombie1.png","Zombie2.png")
zo= loadAnimation("Zo.png","Zo1.png","Zo2.png")
z= loadAnimation("Z1.png","Z2.png","Z3.png")
zombie= loadAnimation("Zom1.png","Zom2.png","Zom3.png")
}


function setup(){
  canvas = createCanvas(displayWidth-100,displayHeight-100);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();

  

}

function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
}
