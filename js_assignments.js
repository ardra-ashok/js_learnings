 
console.log('---- 1. Program to print all numbers from 1 to 100 using a loop. -----')

for(let i = 1; i <= 100; i++)
  console.log(i);
  
console.log('----2. Create a function to find the sum of all even numbers in an array. ----')

let arr = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
  22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
  41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59,
  60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78,
  79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97,
  98, 99, 100,
]

function sumOfArrays(arr) {
 let sum = 0
 for (let num of arr) 
  sum = sum + num
 return sum;
}

console.log(sumOfArrays(arr));

console.log("--- 3. Program to check if a given number is positive, negative, or zero ----");

var randomInteger
function generateRandomInteger(min, max) {
 
 randomInteger = Math.floor(Math.random() * (max - min + 1)) + min

 console.log(`Random Integer ${randomInteger}`)
 return randomInteger
}
 
function checkInteger(number) {
  let result = ''
  if (number > 0) {
    result = 'Positive'
  } else if (number < 0) {
    result = 'Negative'
  } else {
    result = 'Zero'
  }
  return result
}

console.log(checkInteger(generateRandomInteger(-10,10)))
console.log(checkInteger(0))
  
console.log("---- 4. Implement a function to count how many times a specific character appears in a string.----");

let str = "alphabet"
let strArr = str.split('')
console.log(strArr);


for (let s of str) {
 
}


console.log('---- 5. Write a program to calculate the product of all numbers from 1 to n using a loop')

function sumOfProductsCalculator(num) {
 let sumOfProducts = 1;
 for (let i = 1; i < num; i++)
  sumOfProducts *= i;
 return sumOfProducts 
}

console.log(sumOfProductsCalculator(generateRandomInteger(1, 20)))

console.log("---- 6.Create a program to reverse an array using a loop.----");

console.log(str.split('').reverse().join(''));

console.log('---- 7. Write a function that checks if a given value is of type array.----')


function isArray(value) {
    return Array.isArray(value);
}

console.log(isArray([1, 2, 3])); 
console.log(isArray("hello"));  
console.log(isArray({ key: "value" })); 
console.log(isArray(123));

console.log('---- 8. Write a program to print a multiplication table for a number using a loop.----')

function generateMultiplicationTable(number) {
 for (let i = 0; i < 20; i++){
  let result = 1
  result = i * number;
  console.log(`${i} * ${number} = ${result}`);
 }
}

generateMultiplicationTable(generateRandomInteger(1, 20))


console.log('----- 9. Create a program to check if a given year is a leap year using conditions.-----')


function isLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return `${year} is a leap year.`
  } else {
    return `${year} is not a leap year.`
  }
}

console.log(isLeapYear(2020))
console.log(isLeapYear(2023)) 
console.log(isLeapYear(2000))
console.log(isLeapYear(1900)) 

console.log('----- 10. Write a function that accepts two numbers and returns their greatest common divisor (GCD).  -----');

function gcd(a, b) {
  while (b !== 0) {
    let temp = b
    b = a % b
    a = temp
  }
  return a
}

console.log(gcd(48, 18)) 
console.log(gcd(56, 98)) 
console.log(gcd(101, 103))
















