"use strict";

let products = [
  { product: "Gummy Worms", price: 5.79 },
  { product: "Plain M&Ms", price: 2.89 },
  { product: "Peanut M&Ms", price: 2.89 },
  { product: "Swedish Fish", price: 3.79 },
  { product: "Zero Bar", price: 2.75 },
  { product: "Reeses Pieces", price: 4.79 },
  { product: "Airhead Extremes", price: 1.99 },
  { product: "Nerd Rope", price: 2.37 },
  { product: "Peach Rings", price: 3.5 },
  { product: "Rolo", price: 8.99 },
  // TODO: fill the array with 10 candies of various
  // price ranges
];

// Which candies costs less than $4.00?

// Which candies has "M&M" its name?

// Do we carry "Swedish Fish"?

function getCandyCost() {
  let numCandy = products.length;
  let matching = [];

  for (let i = 0; i < numCandy; i++) {
    products[i].price;
    //console.log(products[i].price);

    let indexPrice = products[i].price;
    let indexProduct = products[i].product;
    if (indexPrice < 4) {
        console.log(indexPrice)

        //matching.push(indexProduct);
    }
}
//console.log(indexPrice)
//console.log(numCandy)
  //return matching;
}

//getCandyCost();


function getMandM(name){

    let matchingItems = []
        for(let product of products){
            if(product.product.includes(name)){
                matchingItems.push(product.product);
            }
    }
    return matchingItems
}
    


   











//let x = 100;
//function xNum() {
//return 100;
//}
//function printxNum(){
//console.log(100)
//}

//console.log(x)
//console.log(xNum())
//console.log(printxNum())
//printxNum()
//console.log(x + 1)
//console.log(xNum() + 1)
//console.log(printxNum() + 1)

//let y = xNum()
//console.log(y)   //100
//console.log(xNum())  //100
//xNum() += 1 // 101
//y += 1; // 101
//console.log(y)
//console.log(xNum())
