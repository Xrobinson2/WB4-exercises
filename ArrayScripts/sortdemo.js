"use strict";

function compareAscendingNumber(a, b) {
  if (a < b) {
    return -1;
  } else if (a == b) {
    return 0;
  } else return 1;
}

let students = [
  "Natalie",
  "Brittany",
  "Zachary",
  "Victor",
  "Randy",
  "100",
  "52",
  "Zana",
  "Brady",
  "8300",
];

let numbers = [3, 27, 400, 1, 111, 5];


//case insesitive sort
function caseInsensitiveCompare(a,b){
    let aAsUpper = a.toUppercase()
    let bAsUpper = b.toUppercase()
    if(aAsUpper < bAsUpper){ return -1 }
    else if ( aAsUpper == bAsUpper ){ return 0}
    else { return1 }
}


console.log("BEFORE");
console.log(students);
console.log(numbers);

students.sort;

numbers.sort(compareAscendingNumber);

/*numbers.sort(function () {
  if (a < b) {
    return -1;
  } else if (a == b) {
    return 0;
  } else return 1;
});*/

numbers.sort(function(a,b) {return a - b })
numbers.sort((a,b) => a - b) //lambda function used without "function"

console.log();
console.log("AFTER");
console.log(students);
console.log(numbers);
