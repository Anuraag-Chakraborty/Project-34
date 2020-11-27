var dog, Dog, happyDog;
var database;
var foodS, foodStock;

function preload()
{
  Dog = loadImage("dogImg.png");
  happyDog = loadImage("dogImg1.png");
}

function setup() {
  
  createCanvas(500, 500);
 
  dog = createSprite(250,250,10,10);
  dog.addImage(Dog);
 
  database = firebase.database();
  
  foodStock = database.ref('food');
  foodStock.on("value", readStock);
}


function draw() {  

  background(46,189,87);
  
  if(keyWentDown(UP_ARROW)){
      writeStock(foodS);
      dog.addImage(dogHappy);
  }
  
drawSprites();
textSize(15);
fill("lime");
stroke("cyan");
text("Press the up arrow key to feed the dog", 100,100);
}

function readStock(data){
  foodS = data.val();
}

function writeStock(x){

  if (x <= 0){
    x = 0;
  }
  else{
    x = x-1
  }

  database.ref('/').update({
    Food : x
  })
}

/*
var db;
var dog,dogImage,dogImage1,food,foodImage,foodStock,foodRef;

function preload()
{
  //load images here
  dogImage = loadImage("dogImg.png");
  dogImage1 = loadImage("images/dogImg1.png");
  //foodImage = loadImage("Bone.png");
}

function setup() {
  createCanvas(500, 500);

  //Sprites

  food = createSprite(250,400,50,50);
  //food.addImage(foodImage);
  food.scale = 0.3;


  dog = createSprite(400,150);
  dog.addImage(dogImage);
  dog.scale = 0.2;

  //Firebase
  db = firebase.database();

  //Reference for food
  foodRef = db.ref("Food");
  foodRef.on("value",read,console.log("error"));

  foodRef.set(20);


}


function draw() {  
  background(46, 139, 87);
  drawSprites();
  
  //add styles here
  textSize(32);
  fill("yellow");
  text("Bones AVAILABLE IS/ARE: "+foodStock,50,300);
  textSize(16);
  text("You are requested to press the 'Up Arrow' key to feed the dog",50,70)
  decreaseFood();
  if(foodStock===0){
    foodStock = 20;
  }
}

function read(data){
  foodStock = data.val();
}

function decreaseFood(){
  if(keyWentDown(UP_ARROW)){
  foodRef = db.ref("Food");
  foodStock = foodStock - 1;
  foodRef.set(foodStock);
  dog.addImage(dogImage1);
  food.x = 350;
  food.y = 200;
  food.scale = 0.1;

  }
  if(keyWentUp(UP_ARROW)){
    foodStock = foodStock;
    dog.addImage(dogImage);
    food.x = 250;
    food.y = 400;
    food.scale = 0.2;
  }
}*/