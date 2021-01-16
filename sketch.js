//Create variables here
var dog, happyDog, database, foodS, foodStock;
var Dog, happydog;
var database;
function preload()
{
  //load images here
  Dog=loadImage("dogImg.png");
  happydog=loadImage("dogImg1.png");

}

function setup() {
  createCanvas(500,500);
  dog=createSprite(250,250,10,10);
  dog.addImage(Dog);
  dog.scale=0.2;
database=firebase.database();
foodStock=database.ref('Food');
foodStock.on("value",readStock,showerr);
}


function draw() {  
background(46,139,87);
if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(happydog);

}
if(keyWentUp(UP_ARROW)){
  dog.addImage(Dog);

}


  //add styles here
textSize(20);
fill("white");
stroke("white");
text("Food remaining : "+foodS,100,100);
drawSprites();
}

function readStock(data){
  foodS=data.val();
}

function writeStock(x){
  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }

  database.ref('/').update({
    Food:x
  })
}
function showerr(){
  console.log("error");
}
