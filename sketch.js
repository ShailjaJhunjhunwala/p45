const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var database;
var gameState = 0 ;
var playerCount;
var game;
var form;
var player;
var allPlayers;
var striker,invisibleSprite,chain;
var queenCoin;
var blackImg,whiteImg,strikerImg,boardImage,queenImg;
var paddle,paddle1;
var blackCoinsGroup,whiteCoinsGroup;
var wall1,wall2,wall3,wall4;
var coinsGroup;
function preload(){
  blackImg = loadImage("images/black_coin_carrom_-removebg-preview.png")
  whiteImg = loadImage("images/white_coin-removebg-preview.png")
  strikerImg = loadImage("images/striker-removebg-preview.png")
  boardImage = loadImage("images/carrom_board-removebg-preview.png")
  queenImg = loadImage("images/queens_coin-removebg-preview.png")
}
function setup(){
  engine = Engine.create();
  world = engine.world;
  database = firebase.database();
  console.log(database);
  createCanvas(1200,700);
  coinsGroup = new Group();
  
  game = new Game()
  game.getState()
  game.start()
}

function draw(){
  
  if(playerCount === 2){
    game.update(1)
  }
  if(gameState === 1){
    clear()
    game.play()
  }
  if(gameState === 2){
    game.end()
  }
}
 function mouseDragged(){
   console.log(mouseDragged)
   Matter.Body.setPosition(paddle.body,{x:mouseX,y:mouseY})
 }
 function mouseReleased(){
   console.log(mouseReleased)
   chain.fly()
  striker.velocityY = paddle.body.velocity.y
  console.log(paddle.body.velocity)
  console.log(striker.velocity)
 }