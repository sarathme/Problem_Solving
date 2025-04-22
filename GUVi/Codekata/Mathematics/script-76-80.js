// MATH - 76

/*

Given number N, find the minimum factor which yeilds odd number as the quotient.
Input Size : N <= 100000
Sample Testcase :
INPUT
9
OUTPUT
1
*/
/*
const userInput = ["4"];

const num = +userInput[0];
let arr = [];
for (let i = 1; i <= num; i++) {
  if (num % i === 0 && (num / i) % 2 !== 0) {
    arr.push(i);
  }
}

console.log(arr[0]);
*/

// MATH - 77

/*
Given two numbers N,K followed by an array of N elements, print the array after doing right shift K times (in cyclic manner).
Input Size : 1 <= N, K <= 100000
Sample Testcase :
INPUT
3 2
7 2 3
OUTPUT
2 3 7

*/
/*
const userInput = ["3 2", "7 2 3"];

const arr = userInput[1].split(" ").map(Number);
const n = +userInput[0].split(" ")[0];
const k = +userInput[0].split(" ")[1];

for (let i = 0; i < k; i++) {
  const temp = arr[n - 1];
  for (let j = n - 2; j >= 0; j--) {
    arr[j + 1] = arr[j];
  }
  arr[0] = temp;
}

console.log(arr);
*/

// MATH - 78

/*
Given a number N, find the factorial of N.
Input Size : 1 <= N <= 25
Sample Testcase :
INPUT
5
OUTPUT
120
*/
/*
const userInput = ["5"];

const n = +userInput[0];

function factorial(num) {
  if (num === 1) {
    return 1;
  }

  return num * factorial(num - 1);
}

console.log(factorial(6));

*/
// MATH 80

/*
Given 2 numbers a and B.Print the value of a!/b!.
Input Size : A,B <= 10000 and A-B <= 5
Sample Testcase :
INPUT
4 2
OUTPUT
12

*/
/*
const userInput = ["4 2"];

const arr = userInput[0].split(" ").map(Number);

function factorial(num) {
  if (num === 1 || num === 0) {
    return 1;
  }

  return num * factorial(num - 1);
}

const res = factorial(0) / factorial(5);
console.log(res.toFixed(2));
*/
