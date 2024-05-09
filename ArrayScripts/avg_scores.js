"use strict";

let myScores = [92, 98, 84, 76, 89, 99, 100];
let yourScores = [82, 98, 94, 88, 92, 100, 100];

function getAverage(myScores) {
  let sum = 0;
  for (let i = 0; i < myScores.length; i++) {
    sum += myScores[i];
  }
  return sum / myScores.length;
}

let myAverage = getAverage(myScores);
console.log("My average is", myAverage.toFixed(2));

function getAverage(yourScores) {
  let sum = 0;
  for (let i = 0; i < yourScores.length; i++) {
    sum += yourScores[i];
  }
  return sum / yourScores.length;
}

let yourAverage = getAverage(yourScores);
console.log("Your average is", yourAverage.toFixed(2));
