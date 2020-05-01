'use strict';
var productArray = [];


var productOneEl = document.getElementById('product-1');
var productTwoEl = document.getElementById('product-2');
var productThreeEl = document.getElementById('product-3');
var divEl = document.getElementById('product-container');
var productList = document.getElementById('productList');

var clickTracker = 10;
// var uniqueArray = [];
// var unique = 6;
// notes
function Product(title, src) {
  // TODO: add clicked = 0 and views = 0
  this.productTitle = title;
  this.productSrc = src;
  this.productAlt = title;
  this.views = 0;
  this.clicked = 0;

  productArray.push(this);
  // console.log(this.click);
}
// console.log(uniqueArray);

//randomizer
function randomizer (max) {
  return Math.floor(Math.random() * max);
}
console.log(randomizer)
//make six unique numbers out of an array
// function uniqueArrayGenerator () {
//   while (Product.uniqueArray.length < unique) {
//     console.log(Product.uniqueArray.length);
//     var random = randomizer();

//     while(!Product.uniqueArray.includes(random)) {
//       Product.uniqueArray.push(random);
//     }
//   }
// }
// uniqueArrayGenerator();
// for( var i = 0 ; i < unique ; i++) {
//   uniqueSixArray.push(Math.floor(oneProductOfSix));
//   for(var i = 0 ; i < )
//   do {
//     oneProductOfSix = randomizer();
//   } while (oneProductOfSix === uniqueSixArray[i]);


//   //first create the six
//   //then do the pop

// }


// use pop method to pop the last three off the back and assign those to prod1 prod2 prod3 variables
//// these three are rendered to the screen.
// then, randomizer pushes three unique numbers to the front of uniqueSixArray

//come up with way to keep this populated
//// a while loop inside of a while loop

// use push method to add the remaining three to the
//  write a function to compare three old ones to three new ones
//


function imageGenerator() {
// //TODO: in order to make this have no repeats, use a do while
  do {
    var product1 = this.randomizer(productArray.length);
    var product2 = this.randomizer(productArray.length);
    var product3 = this.randomizer(productArray.length);
  } while
  ((product1 === product2) || (product2 === product1) || (product3 === product2) || (product3 === product1));

  productOneEl.title = productArray[product1].productTitle;
  productOneEl.src = productArray[product1].productSrc;
  productOneEl.alt = productArray[product1].productAlt;
  productArray[product1].views++;

  productTwoEl.title = productArray[product2].productTitle;
  productTwoEl.src = productArray[product2].productSrc;
  productTwoEl.alt = productArray[product2].productAlt;
  productArray[product2].views++;

  productThreeEl.title = productArray[product3].productTitle;
  productThreeEl.src = productArray[product3].productSrc;
  productThreeEl.alt = productArray[product3].productalt;
  productArray[product3].views++;
  imageGenerator();
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
// new Product('scissors', 'assets/scissors.jpg');
// new Product('shark', 'assets/shark.jpg');
// new Product('pet-sweep', 'assets/sweep.jpg');
// new Product('tauntaun', 'assets/tauntaun.jpg');
// new Product('unicorn', 'assets/unicorn.jpg');
// // new Product('unicorn', 'assets/unicorn.jpg');
// new Product('usb', 'assets/usb.gif');
// new Product('water-can', 'assets/water-can.jpg');
// new Product('wine-glass', 'assets/wine-glass.jpg');
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
  clickTracker--;

  if(clickTracker === 0) {
    for(i = 0 ; i < productArray.length; i++) {
      productArray[i].renderProductList();
    }


    stopClicking();

  }
  imageGenerator();
}

divEl.addEventListener('click', handleClick);

// imageGenerator();
