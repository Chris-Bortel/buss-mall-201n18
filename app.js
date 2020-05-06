"use strict";
var productArray = [];

var productOneEl = document.getElementById("product-1");
var productTwoEl = document.getElementById("product-2");
var productThreeEl = document.getElementById("product-3");
var divEl = document.getElementById("product-container");
var productList = document.getElementById("productList");

var randomArray = [];
var clickTracker = 5;
// var uniqueArray = [];
// var unique = 6;
// notes
function Product( src, title, clicked = 0, views = 0) {
  // TODO: add clicked = 0 and views = 0
  this.src = src;
  this.title = title;
  this.alt = title;
  this.clicked = clicked;
  this.views = views;

  productArray.push(this);
  // console.log(this.click);
}
// console.log(uniqueArray);

//randomizer
function randomizer(max) {
  return Math.floor(Math.random() * max);
  // return Math.floor(Math.random() * 20);
}
console.log(randomizer);
// make six unique numbers out of an array
function fillArray() {
  while (randomArray.length < 6) {
    var tempRandomNumber = randomizer(productArray.length);
    if (randomArray.includes(tempRandomNumber)) {
      console.log("repeat, repeat");
    } else {
      randomArray.push(tempRandomNumber);
    }
  }
  console.log(randomArray)
}

function imageGenerator() {
  // //TODO: in order to make this have no repeats, use a do while
 
    var product1 = randomArray.shift();
    console.log(product1);
    var product2 = randomArray.shift();;
    console.log(product2);
    var product3 = randomArray.shift();;
    console.log(product3);
  // } while (
  //   //look into using includes
  //   // want to see if these products were recently used
  //   // declare array of viewed products
  //   product1 === product2 ||
  //   product3 === product2 ||
  //   product3 === product1
  // );

  productOneEl.src = productArray[product1].src;
  productOneEl.title = productArray[product1].title;
  productOneEl.alt = productArray[product1].alt;
  productArray[product1].views++;

  productTwoEl.src = productArray[product2].src;
  productTwoEl.title = productArray[product2].title;
  productTwoEl.alt = productArray[product2].alt;
  productArray[product2].views++;

  productThreeEl.src = productArray[product3].src;
  productThreeEl.title = productArray[product3].title;
  productThreeEl.alt = productArray[product3].alt;
  productArray[product3].views++;
  fillArray();
}

new Product("assets/bag.jpg", "bag");
new Product( "assets/banana.jpg", "banana");
new Product( "assets/bathroom.jpg", "bathroom");
new Product( "assets/boots.jpg", "boots");
new Product( "assets/breakfast.jpg", "breakfast");
new Product( "assets/bubblegum.jpg", "bubblegum");
new Product( "assets/chair.jpg", "chair");
new Product( "assets/cthulhu.jpg", "cthulhu");
new Product( "assets/dog-duck.jpg", "dog-duck");
// new Product( 'assets/scissors.jpg', 'scissors');
// new Product( 'assets/shark.jpg', 'shark');
// new Product( 'assets/sweep.jpg', 'pet-sweep');
// new Product( 'assets/tauntaun.jpg', 'tauntaun');
// new Product( 'assets/unicorn.jpg', 'unicorn');

// new Product( 'assets/usb.gif', 'usb');
// new Product( 'assets/water-can.jpg', 'water-can');
// new Product( 'assets/wine-glass.jpg', 'wine-glass');
// function removeFromArray(){
//   console.log(randomArray.shift());
//   console.log(randomArray.shift());
//   console.log(randomArray.shift());
// }

// fillArray();
// removeFromArray();
// fillArray();
// console.log(randomArray);
// removeFromArray();
// console.log(randomArray);

// while loop is less than SVGMatrix, run randome Array
// if (.includes)

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

// function saveLocalStorage() {
//   var savedProducts = JSON.stringify(productArray);
//   localStorage.setItem("storedproducts", savedProducts);
// }

// function loadLocalStorage() {
//   //check to see if there's stuff in local storage. if there is, thne we grab it and use that data
//   //if local storage is empty, poceed as if it is the first time
//   if (localStorage.getItem("storedproducts")) {
//     var localStorageProducts = JSON.parse(
//       localStorage.getItem("storedproducts")
//     );
//     console.log(localStorageProducts);
//     for (var i = 0; i < localStorageProducts.length; i++) {
//       new Product(
//         localStorageProducts[i].src,
//         localStorageProducts[i].title,
//         localStorageProducts[i].clicked,
//         localStorageProducts[i].views
//       );
//     }
//   } else {
//     new Product("assets/bag.jpg", "bag");
//     new Product( "assets/banana.jpg", "banana");
//     new Product( "assets/bathroom.jpg", "bathroom");
//     new Product( "assets/boots.jpg", "boots");
//     new Product( "assets/breakfast.jpg", "breakfast");
//     new Product( "assets/bubblegum.jpg", "bubblegum");
//     new Product( "assets/chair.jpg", "chair");
//     new Product( "assets/cthulhu.jpg", "cthulhu");
//     new Product( "assets/dog-duck.jpg", "dog-duck");
//     // new Product('scissors', 'assets/scissors.jpg');
//     // new Product('shark', 'assets/shark.jpg');
//     // new Product('pet-sweep', 'assets/sweep.jpg');
//     // new Product('tauntaun', 'assets/tauntaun.jpg');
//     // new Product('unicorn', 'assets/unicorn.jpg');
//     // // new Product('unicorn', 'assets/unicorn.jpg');
//     // new Product('usb', 'assets/usb.gif');
//     // new Product('water-can', 'assets/water-can.jpg');
//     // new Product('wine-glass', 'assets/wine-glass.jpg');
//   }
//   imageGenerator();
// }



// function seedChartData() {
//   var labelArray = [];
//   var clickedArray = [];
//   var viewedArray = [];
//   console.log(viewedArray);
//   for (var i = 0; i < productArray.length; i++) {
//     labelArray.push(productArray[i].title);
//     clickedArray.push(productArray[i].clicked);
//     viewedArray.push(productArray[i].views);
//   }
//   return [labelArray, clickedArray,  viewedArray];
// }

function stopClicking() {
  divEl.removeEventListener("click", handleClick);
  divEl.textContent = "";
  // console.log('done');
}

//TODO: build a function that generates colors for each item on the chart
// function renderChart() {
//   var ctx = document.getElementById("myChart");
//   var myChart = new Chart(ctx, {
//     type: "bar",
//     data: {
//       labels: seedChartData()[1],
//       datasets: [
//         {
//           label: "# of Votes",
//           data: seedChartData()[0],
//           backgroundColor: [
//             "rgba(255, 99, 132, 0.2)",
//             "rgba(54, 162, 235, 0.2)",
//             "rgba(255, 206, 86, 0.2)",
//             "rgba(75, 192, 192, 0.2)",
//             "rgba(153, 102, 255, 0.2)",
//             "rgba(255, 159, 64, 0.2)",
//           ],
//           borderColor: [
//             "rgba(255, 99, 132, 1)",
//             "rgba(54, 162, 235, 1)",
//             "rgba(255, 206, 86, 1)",
//             "rgba(75, 192, 192, 1)",
//             "rgba(153, 102, 255, 1)",
//             "rgba(255, 159, 64, 1)",
//           ],
//           borderWidth: 1,
//         },
//         {
//           label: "# of Views",
//           data: seedChartData()[2],
//           backgroundColor: [
//             "rgba(255, 99, 132, 0.2)",
//             "rgba(54, 162, 235, 0.2)",
//             "rgba(255, 206, 86, 0.2)",
//             "rgba(75, 192, 192, 0.2)",
//             "rgba(153, 102, 255, 0.2)",
//             "rgba(255, 159, 64, 0.2)",
//           ],
//           borderColor: [
//             "rgba(255, 99, 132, 1)",
//             "rgba(54, 162, 235, 1)",
//             "rgba(255, 206, 86, 1)",
//             "rgba(75, 192, 192, 1)",
//             "rgba(153, 102, 255, 1)",
//             "rgba(255, 159, 64, 1)",
//           ],
//           borderWidth: 1,
//         },
//       ],
//     },
//     options: {
//       scales: {
//         yAxes: [
//           {
//             ticks: {
//               beginAtZero: true,
//             },
//           },
//         ],
//       },
//     },
//   });
// }

Product.prototype.renderProductList = function () {
  var productListUlElement = document.createElement("li");
  // productListUlElement.textContent = 'ergasdfg';
  productListUlElement.textContent =
    this.title + ": " + this.clicked + ", viewed " + this.views;
  productList.appendChild(productListUlElement);
};

Product.prototype.renderProductListClicks = function () {
  var productListClicksUlElement = document.createElement("li");
  productListClicksUlElement.textContent = this.clicked;
  productList.appendChild(productListClicksUlElement);
};

function handleClick(event) {
  console.log(event);
  // make a variable to store the clicked product
  var clickedProductImage = event.target.title;
  for (var i = 0; i < productArray.length; i++) {
    if (clickedProductImage === productArray[i].title) {
      console.log("additonally", productArray[i].title);
      console.log("Before", productArray[i].clicked);
      productArray[i].clicked++;
      console.log("After", productArray[i].clicked);
    }
  }
  // console.log(productArray);
  clickTracker--;

  if (clickTracker === 0) {
    for (i = 0; i < productArray.length; i++) {
      productArray[i].renderProductList();
    }

    stopClicking();
    // saveLocalStorage();
    // renderChart();
  }
  imageGenerator();
}

divEl.addEventListener("click", handleClick);
fillArray();
imageGenerator();
// loadLocalStorage();
