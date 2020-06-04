// var numbers = [3, 56, 2, 48, 5];

// Map -Create a new array by doing something with each item in an array.


// const newNumbers = numbers.map( x =>
//      {
//         return x * 2;
//       }
// );

// var newNumbers = [];
// numbers.forEach(function (x) {
//   newNumbers.push(x * 2);
// });

// const newNumbers = numbers.map(x => { x * 2});

// console.log(newNumbers);

// Filter - Create a new array by keeping the items that return true.

// const newNumbers = numbers.filter((num) => {
//   return num < 10;
// });

// var newNumbers = [];
// numbers.forEach(function(num) {
//   if (num < 10) {
//     newNumbers.push(num);
//   }
// })

// Reduce - Accumulate a value by doing something to each item in an array.


// var newNumber = numbers.reduce( (accumulator, currentNumber) => {

//     console.log("accumulator = " + accumulator);
//     console.log("currentNumber = " + currentNumber);
//     return accumulator + currentNumber;
// })

//  var newNumber = 0;
//    numbers.forEach(function (currentNumber) {
//    newNumber += currentNumber
//  })

// Find - find the first item that matches from an array.

// const newNumber = numbers.find( num => {  num > 10 })

// console.log(newNumber);

// FindIndex - find the index of the first item that matches.

// const newNumber = numbers.findIndex((num) =>{
//   return num > 10;
// })

// console.log(newNumber);

import Details from './Emoji_Component/emoji_details'

const para =Details.map( (a) =>{

    return Details.meaning.substring(0,100)

})
console.log(para)