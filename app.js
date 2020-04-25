'use strict';
var productArray = [];

var productOneEl = document.getElementById('product-1');
var productTwoEl = document.getElementById('product-2');
var productThreeEl = document.getElementById('product-3');
var divEl = document.getElementById('product-container');

var clickTracker = 3;

function Product(name, src) {
  this.name = name;
  this.src = src;
  this.clicked = 0;

  productArray.push(this);
  // console.log(this.click);
}

//randomizer
function randomizer (max) {
  return Math.floor(Math.random() * max); 
}

function imageGenerator() {
  var product1 = randomizer(productArray.length);
  var product2 = randomizer(productArray.length);
  var product3 = randomizer(productArray.length);

  productOneEl.title = productArray[product1].name;
  productOneEl.src = productArray[product1].src;

  productTwoEl.title = productArray[product2].name;
  productTwoEl.src = productArray[product2].src;

  productThreeEl.title = productArray[product3].name;
  productThreeEl.src = productArray[product3].src;
  // imageGenerator();
}

function stopClicking() {
  divEl.removeEventListener('click', handleClick);
  divEl.textContent = '';
  console.log('done');
}
new Product('bag', 'assets/bag.jpg');
new Product('banana', 'assets/banana.jpg');
new Product('bathroom', 'assets/bathroom.jpg');
new Product('boots', 'assets/boots.jpg');
// new Product('breakfast', 'assets/breakfast.jpg');
// new Product('bubblegum', 'assets/bubblegum.jpg');
// new Product('chair', 'assets/chair.jpg');
// new Product('cthulhu', 'assets/cthulhu.jpg');
// new Product('dog-duck', 'assets/dog-duck.jpg');
// new Product('scissors', 'assets/scissors.jpg');
// new Product('shark', 'assets/shark.jpg');
// new Product('pet-sweep', 'assets/sweep.jpg');
// new Product('tauntaun', 'assets/tauntaun.jpg');
// new Product('unicorn', 'assets/unicorn.jpg');
// new Product('unicorn', 'assets/unicorn.jpg');
// // new Product('usb', 'assets/usb.jpg');
// new Product('water-can', 'assets/water-can.jpg');
// new Product('wine-glass', 'assets/wine-glass.jpg');


// add an eventlister
function handleClick(event){

  // make a variable to store the clicked product
  var clickedProductImage = event.target.title;
  for (var i = 0; i < productArray.length ; i++) {
    if (clickedProductImage === productArray[i].name) {
      productArray[i].clicked++;
    }
    // need to add a function to track the number of clicks that the user has made.
  }
  //each time product is clicked the available click number goes down one
  clickTracker--;

  if(clickTracker === 0) {
    stopClicking();
  }
  imageGenerator();
}

divEl.addEventListener('click', handleClick);
//since we made the event, we just need an event listener

imageGenerator();
