//Create variables here
var dog; 
var dogImg, dogHappy;
var database;
var foodStock, foodS;

function preload()
{
  //load images here
  dogImg = loadImage("../images/dogImg.png");
  dogHappy = loadImage("../images/dogImg1.png");
  
}

function setup() {
  createCanvas(500, 500);
  
  database = firebase.database();

  foodStock = database.ref('food');
  foodStock.on("value",readStock);

  dog = createSprite(250, 250, 10, 10);
  dog.addImage(dogImg);
  dog.scale = 0.1;

  
}


function draw() {  
  background(46, 139, 87);

  if(keyWentDown(UP_ARROW)){
    dog.addImage(dogHappy);
  }

  textSize(12);
  fill("black");
  text("Food Stock remaining : " + foodStock, 0, 150);
  textSize(15);
  fill("black")
  text("Press the Up Arrow key to feed Draco Milk!", 110, 50);
  

  drawSprites();
  //add styles here

}

function readStock(data){
    foodS = data.val();
}

function writeStock(x){

  x : 20

if(x <= 0){
  x: 0;
} else {
  x = x - 1;
}

database.ref('/').update({
  Food: x
})

}
