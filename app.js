'use strict';
var productArray = [];


var productOneEl = document.getElementById('product-1');
var productTwoEl = document.getElementById('product-2');
var productThreeEl = document.getElementById('product-3');
var divEl = document.getElementById('product-container');
var productList = document.getElementById('productList');

var clickTracker = 5;
// var uniqueArray = [];
// var unique = 6;
// notes
function Product(title, src, clicked=0, views=0) {
  // TODO: add clicked = 0 and views = 0
  this.productTitle = title;
  this.productSrc = src;
  this.productAlt = title;
  this.clicked = clicked;
  this.views = views;

  productArray.push(this);
  // console.log(this.click);
}
// console.log(uniqueArray);

//randomizer
function randomizer (max) {
  return Math.floor(Math.random() * max);
}
console.log(randomizer);
// make six unique numbers out of an array




//   //first create the six
//   //then do the pop




// use pop method to pop the last three off the back and assign those to prod1 prod2 prod3 variables
//// these three are rendered to the screen.
// then, randomizer pushes three unique numbers to the front of uniqueSixArray

//come up with way to keep this populated
//// a while loop inside of a while loop

// use push method to add the remaining three to the
//  write a function to compare three old ones to three new ones
//

// save to local storage


function saveLocalStorage(){
  var savedProducts = JSON.stringify(productArray);
  localStorage.setItem('storedproducts', savedProducts);
}

function loadLocalStorage(){
  //check to see if there's stuff in local storage. if there is, thne we grab it and use that data
  //if local storage is empty, poceed as if it is the first time
  if(localStorage.getItem('storedproducts')){
    var localStorageProducts = JSON.parse(localStorage.getItem('storedproducts'));
    console.log(localStorageProducts);
    for(var i = 0; i < localStorageProducts.length; i++){
      new Product(localStorageProducts[i].productTitle, localStorageProducts[i].productSrc, localStorageProducts[i].clicked, localStorageProducts[i].views);
    }
  }

  else{
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

  }
  imageGenerator();
}

function imageGenerator() {
// //TODO: in order to make this have no repeats, use a do while
  do {
    var product1 = randomizer(productArray.length);
    console.log(product1);
    var product2 = randomizer(productArray.length);
    console.log(product2);
    var product3 = randomizer(productArray.length);
    console.log(product3);
  } while
  //look into using includes
  // want to see if these products were recently used 
  // declare array of viewed products
  ((product1 === product2) || (product3 === product2) || (product3 === product1));

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
}

function seedChartData() {
  var clickedArray = [];
  var labelArray = [];
  var viewedArray = [];
  console.log(viewedArray);
  for (var i = 0; i < productArray.length; i++) {
    clickedArray.push(productArray[i].clicked);
    labelArray.push(productArray[i].productTitle);
    viewedArray.push(productArray[i].views);
  }
  return [clickedArray, labelArray, viewedArray];
}

function stopClicking() {
  divEl.removeEventListener('click', handleClick);
  divEl.textContent = '';
  // console.log('done');
}

//TODO: build a function that generates colors for each item on the chart
function renderChart() {
  var ctx = document.getElementById('myChart');
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: seedChartData()[1],
      datasets: [{
        label: '# of Votes',
        data: seedChartData()[0],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      },
      {
        label: '# of Views',
        data: seedChartData()[2],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });
}


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
  }
  // console.log(productArray);
  clickTracker--;

  if(clickTracker === 0) {
    for(i = 0 ; i < productArray.length; i++) {
      productArray[i].renderProductList();
    }


    stopClicking();
    saveLocalStorage();
    renderChart();
  }
  imageGenerator();
}

divEl.addEventListener('click', handleClick);

loadLocalStorage();
