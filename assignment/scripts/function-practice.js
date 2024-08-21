console.log('***** Function Practice *****');

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName(name) {
  return 'Hello Sumia!';
}
// Remember( to call the function to test
console.log('Test - should say "Hello Sumia!"', helloName());

// 3. Function to add two numbers together & return the result
function addNumbers(firstNumber,secondNumber) {
  console.log('in addNumbers:', firstNumber, secondNumber);
  let answer = firstNumber + secondNumber;
  return answer;
  // return firstNumber + secondNumber;
}
// Remember( to call the function to test
console.log('Test - should say "firstNumber + secondNumber"',  addNumbers());

// 4. Function to multiply three numbers & return the result
function multiplyThree(num0, num1, num2) {
console.log('in multiplyThree:', num0, num1, num2);
let answer = 4 * 2 * 3; 
return answer; 
}
// Remember( to call the function to test
console.log('Test - should say "num0, num1, num2"', multiplyThree());

// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive(number) {
  if (number > 0) {
    return number > 0;
  }
  return number; 
}
// Call the function to test each outcome (true & false) 
console.log('Test - should say "number"', isPositive());
// Write a separate console.log statement for each outcome
console.log(isPositive(6)); // true 
console.log(isPositive(9)); // true 
console.log(isPositive(0)); // false 
console.log(isPositive(-1)); // false 

// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
function getLast(array) {
  if (array.length === 0) {
    return undefined; 
  }
  return array[array.length -2];
}
console.log('Test - should say "array"', getLast()); 

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
function find(value, array) {
for (let i=0; i < array.length; i++ ){
  console.log('for loop', array[i]);
if (array[i] === value) {
  return true;
}
return false; 
}
}
console.log('Test - should say "value", "array"', find()); 
// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
return string.charAT(0) === letter;
}
console.log('Test - should say "letter", "string"', isFirstLetter()); 
console.log(isFirstLetter("Sumia",("s"))); // true 
console.log(isFirstLetter("Sumia",("y"))); // false 
// 9. Function to return the sum of all numbers in an array
function sumAll(array) {
  let sum = 0;
   // TODO: loop to add items
  for (i=0; i< array.length; i++){
    sum += array[i];
  }
  // TODO: return the sum
  return sum; 
}
console.log('Test - should say "array"', sumAll()); 
let numbers = [1,2,3,4,5]
console.log(sum-array(numbers)); // output 13

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
function allPositive() {
  return array.filter(num => num > 0); {
}
 
}
let inputArray = [-10, 5, 0, -4, 9, 3]
let positiveNumbers = getPositiveNumbers(inputArray);
console.log(positiveNumbers); // output: [5,0,9,3]
console.log(inputArray); // output: [-10, 5, 0, -4, 9, 3] (unchanged)
console.log('Test - should say "array"', allPositive()); 


// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!

// Write a function that accepts an argument in the form of a base number
// and returns a new function that adds the new argument to the base number.
function createAdder(baseNumber) {
  return function(newNumber){
return baseNumber + newNumber;
  };
}
let addThree = createAdder(3); 
console.log(addThree(6)); // output: 9
// DO NOT MODIFY
// Used for automated testing 
try {
  module.exports = {
    hello,
    helloName,
    addNumbers,
    multiplyThree,
    isPositive,
    getLast,
    find,
    isFirstLetter,
    sumAll,
    allPositive,
  };
} catch (e) {
  // Do nothing
}
