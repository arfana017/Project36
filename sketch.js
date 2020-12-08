//Create variables here
var dog, happyDog, database, foodS, foodStock, canvas;
var lastFed, fedTime, foodObj, feed, addFood, food1;
var foodCount, input, milk, milkImg;

function preload()
{
  //load images here
  dogImage = loadImage("images/dogImg.png");
  happyDogImage = loadImage("images/dogImg1.png");
  milkImage = loadImage("images/Milk.png");

}

function setup() {

  database = firebase.database();
  
  dog = createSprite(650,250,30,30);
  dog.addImage(dogImage);
  dog.scale = 0.2;

  milk = createSprite(565,300,10,10);
  milk.addImage(milkImage);
  milk.scale = 0.1;
  milk.visible = false;

  food1 = new Food();
  
  food1.start();

  addFood = createButton("Add food");
  addFood.position(370, 70);
  addFood.mousePressed(addFoods);

  feed = createButton("Feed your Dog");
  feed.position(450, 70);
  feed.mousePressed(feedDog);

  createCanvas(800, 400);

}


function draw() {  

  background(46,139,87);

  food1.display();

  drawSprites();

  }

  function feedDog() {
    food1.getFoodStock();
    food1.updateFedTime();
  
    if(foodCount === 0) {
      foodCount = 0;
      milk.visible = false;
      dog.addImage(dogImage);
    } 
    
    else {

      food1.updateFoodStock(foodCount - 1);
      milk.visible = true;
      dog.addImage(happyDogImage);

    }
  }
  
  function addFoods() {
   food1.getFoodStock();
  
   food1.updateFoodStock(foodCount + 1); 
  }


