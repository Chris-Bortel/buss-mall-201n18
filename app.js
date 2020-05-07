"use strict";
var productArray = [];
console.log(productArray);
var productOneEl = document.getElementById("product-1");
var productTwoEl = document.getElementById("product-2");
var productThreeEl = document.getElementById("product-3");
var divEl = document.getElementById("product-container");
var productList = document.getElementById("productList");

var randomArray = [];

var clickTracker = 10;

function Product( src, title, clicked = 0, views = 0) {
  this.src = src;
  this.title = title;
  this.alt = title;
  this.clicked = clicked;
  this.views = views;

  productArray.push(this);
  // console.log(this.click);
}

function randomizer(max) {
  return Math.floor(Math.random() * max);
}
// console.log(randomizer);

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
  fillArray();
  // console.log("i am filled", fillArray)
  var product1 = randomArray.shift();
  var product2 = randomArray.shift();;
  var product3 = randomArray.shift();;
console.log('product1: ', product1)
console.log('product2: ', product2)
console.log('product3: ', product3)
  productOneEl.src = productArray[product1].src;
  // console.log(productOneEl.src);
  // console.log(productArray[product1].src);
  productOneEl.title = productArray[product1].title;
  productOneEl.alt = productArray[product1].alt;
  productArray[product1].views++;
  // console.log( 'product1 viewed', [product1]);

  productTwoEl.src = productArray[product2].src;
  // console.log(productTwoEl.src);
  // console.log(productArray[product2].src);
  productTwoEl.title = productArray[product2].title;
  productTwoEl.alt = productArray[product2].alt;
  productArray[product2].views++;

  productThreeEl.src = productArray[product3].src;
  // console.log(productThreeEl.src);
  // console.log(productArray[product3].src);
  productThreeEl.title = productArray[product3].title;
  productThreeEl.alt = productArray[product3].alt;
  productArray[product3].views++;
}
// console.log(imageGenerator)

function saveLocalStorage() {
  var savedProducts = JSON.stringify(productArray);
  localStorage.setItem("storedproducts", savedProducts);
  console.log(savedProducts);
  // console.log(saveLocalStorage())
}
// console.log(imageGenerator)

function loadLocalStorage() {

  if (localStorage.getItem("storedproducts")) {
    var getproducts = JSON.parse(
      localStorage.getItem("storedproducts"));
    console.log(getproducts);
    for (var i = 0; i < getproducts.length; i++) {
      new Product(
        getproducts[i].src,
        getproducts[i].title,
        getproducts[i].clicked,
        getproducts[i].views
        );
        console.log(getproducts.length)
        // console.log(loadLocalStorage());
    }
  } else {
    new Product("assets/bag.jpg", "bag");
    new Product( "assets/banana.jpg", "banana");
    new Product( "assets/bathroom.jpg", "bathroom");
    new Product( "assets/boots.jpg", "boots");
    new Product( "assets/breakfast.jpg", "breakfast");
    new Product( "assets/bubblegum.jpg", "bubblegum");
    new Product( "assets/chair.jpg", "chair");
    new Product( "assets/cthulhu.jpg", "cthulhu");
    new Product( "assets/dog-duck.jpg", "dog-duck");
    new Product( 'assets/scissors.jpg', 'scissors');
    new Product( 'assets/shark.jpg', 'shark');
    new Product( 'assets/sweep.jpg', 'pet-sweep');
    new Product( 'assets/tauntaun.jpg', 'tauntaun');
    new Product( 'assets/unicorn.jpg', 'unicorn');

    new Product( 'assets/usb.gif', 'usb');
    new Product( 'assets/water-can.jpg', 'water-can');
    new Product( 'assets/wine-glass.jpg', 'wine-glass');
      

  imageGenerator();
  }
}


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


// console.log(stopClicking())

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
console.log (productListUlElement);
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
  // console.log(event);
  
  var clickedProductImage = event.target.title;
  clickTracker--;
  console.log(clickedProductImage);
  // make a variable to store the clicked product
  for (var i = 0; i < productArray.length; i++) {
    if (clickedProductImage === productArray[i].title) {
      productArray[i].clicked++;
    }
  }
  // clickTracker--;
  // console.log(productArray)
  console.log('click tracker', clickTracker--);
  if (clickTracker < 1){
    saveLocalStorage();
    // console.log(saveLocalStorage);
    divEl.removeEventListener('click', handleClick);
    
    //TODO: This is showing up undefined
    console.log('listed: ', productList.removeEventListener('click', handleClick));
  } else {
    imageGenerator()
  }
  // console.log(clickTracker)
}
// stopClicking();
// saveLocalStorage();
//   if (clickTracker === 0) {
//     for (i = 0; i < productArray.length; i++) {
//       productArray[i].renderProductList();
//     } else {
  // imageGenerator();

//     // renderChart();
//   }
// }

divEl.addEventListener("click", handleClick);
loadLocalStorage();
fillArray();
imageGenerator();
// saveLocalStorage();

