'use strict';
var productArray = [];

var productOneEl = document.getElementById('product-1');
var productTwoEl = document.getElementById('product-2');
var productThreeEl = document.getElementById('product-3');
var divEl = document.getElementById('product-container');
var productList = document.getElementById('productList');

var clickTracker = 5;

function Product(title, src) {
  // add clicked = 0 and views = 0
  this.productTitle = title;
  this.src = src;
  this.alt = title;
  this.views = 0;
  this.clicked = 0;

  productArray.push(this);
  // console.log(this.click);
}

//randomizer
function randomizer (max) {
  return Math.floor(Math.random() * max); 
}

function imageGenerator() {
//TODO: in order to make this have no repeats, use a do while
  // do {

  //
  do {
    var product1 = randomizer(productArray.length);
    var product2 = randomizer(productArray.length);
    var product3 = randomizer(productArray.length);
  } while
  ((product1 === product2) || (product2 === product1) || (product3 === product2) || (product3 === product1));

  productOneEl.title = productArray[product1].productTitle;
  productOneEl.src = productArray[product1].src;
  productOneEl.alt = productArray[product1].alt;
  productArray[product1].views++;

  productTwoEl.title = productArray[product2].productTitle;
  productTwoEl.src = productArray[product2].src;
  productTwoEl.alt = productArray[product2].alt;
  productArray[product2].views++;

  productThreeEl.title = productArray[product3].productTitle;
  productThreeEl.src = productArray[product3].src;
  productThreeEl.alt = productArray[product3].alt;
  productArray[product3].views++;
  // imageGenerator();
}

function stopClicking() {
  divEl.removeEventListener('click', handleClick);
  divEl.textContent = '';
  // console.log('done');
}
new Product('bag', 'assets/bag.jpg');
new Product('banana', 'assets/banana.jpg');
new Product('bathroom', 'assets/bathroom.jpg');
new Product('boots', 'assets/boots.jpg');
new Product('breakfast', 'assets/breakfast.jpg');
new Product('bubblegum', 'assets/bubblegum.jpg');
new Product('chair', 'assets/chair.jpg');
new Product('cthulhu', 'assets/cthulhu.jpg');
new Product('dog-duck', 'assets/dog-duck.jpg');
new Product('scissors', 'assets/scissors.jpg');
new Product('shark', 'assets/shark.jpg');
new Product('pet-sweep', 'assets/sweep.jpg');
new Product('tauntaun', 'assets/tauntaun.jpg');
new Product('unicorn', 'assets/unicorn.jpg');
// new Product('unicorn', 'assets/unicorn.jpg');
new Product('usb', 'assets/usb.gif');
new Product('water-can', 'assets/water-can.jpg');
new Product('wine-glass', 'assets/wine-glass.jpg');
Product.prototype.renderProductList = function () {
  var productListUlElement = document.createElement('li');
  // productListUlElement.textContent = 'ergasdfg';
  productListUlElement.textContent = this.productTitle + ': ' + this.clicked + ', viewed ' + this.views;
  productList.appendChild(productListUlElement);
};

Product.prototype.renderProductListClicks = function () {
  var productListClicksUlElement = document.createElement('li');
  productListClicksUlElement.textContent = this.clicked;
  productList.appendChild(productListClicksUlElement);
};

function handleClick(event){
  console.log(event);
  // make a variable to store the clicked product
  var clickedProductImage = event.target.title;
  for (var i = 0; i < productArray.length ; i++) {
    if (clickedProductImage === productArray[i].productTitle) {
      console.log('additonally', productArray[i].productTitle);
      console.log('Before',productArray[i].clicked);
      productArray[i].clicked++;
      console.log('After',productArray[i].clicked);
    }
    // need to add a function to track the number of clicks that the user has made.
  }
  // console.log(productArray);
  //each time product is clicked the available click number goes down one
  clickTracker--;

  if(clickTracker === 0) {
    for(i = 0 ; i < productArray.length; i++) {
      productArray[i].renderProductList();
    }
    // Product.prototype.renderProductList();
    // Product.prototype.renderProductListClicks();

    stopClicking();

  }
  imageGenerator();
}

divEl.addEventListener('click', handleClick);

imageGenerator();
