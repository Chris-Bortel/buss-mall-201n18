'use strict';
var productArray = [];

var productOneEl = document.getElementById('product-1');
var productTwoEl = document.getElementById('product-2');
var productThreeEl = document.getElementById('product-3');

function Product(name, src) {
  this.name = name;
  this.src = src;
  this.click = 0;

  productArray.push(this);
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

imageGenerator();
