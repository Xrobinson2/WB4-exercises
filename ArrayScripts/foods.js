"use strict";

let lunch = [
  { item: "Steak Fajitas", price: 9.95 },
  { item: "Chips and Guacamole", price: 5.25 },
  { item: "Sweet Tea", price: 2.79 },
];

function getMealCost(lunch) {
  let sum = 0;
  let numOrders = lunch.length;
  for (let i = 0; i < numOrders; i++) {
    sum += lunch[i].price;
  }
  return sum;
}

const taxRate = 0.08;
const tipRate = 0.18;

let mealCost = getMealCost(lunch);
let totalWithTax = mealCost * taxRate + mealCost;
let totalWithTip = mealCost * tipRate + totalWithTax;
console.log("My meal costs " + totalWithTip.toFixed(2));
console.log(totalWithTax.toFixed(2))
console.log(totalWithTip.toFixed(2))