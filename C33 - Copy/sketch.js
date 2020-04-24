
var database;
var form;
var user;
var peopleCount=0;
var personCount=0;
function setup() {
  createCanvas(1000, 1100);
  database = firebase.database();
  form = new Form();
  form.display();
  User = new User();
  User.getCount();
 
}

function draw() {
  background("yellow");
  
}


