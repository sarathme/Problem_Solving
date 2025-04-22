/*
17. Write a code to generate a hollow rectangle using stars. 


Input Description:
Given an integer R indicates no of rows and an integer C indicates no of columns.

Where 1<=R<=100 and Where 1<=C<=100.

Output Description:
Print the hollow rectangle using stars with R rows and C columns.

Sample Input :
3 5
Sample Output :
* * * * *
*       *
* * * * *
*/

// const userInput = ["3 5"];

// const [rows, cols] = userInput[0].split(" ").map(Number);

// for (let i = 1; i <= rows; i++) {
//   const res = [];
//   for (let j = 1; j <= cols; j++) {
//     res.push("*");
//     console.log(i, j);
//   }

//   console.log(res.join(" "));
// }

const myFish = ["angel", "clown", "mandarin", "sturgeon"];
const removed = myFish.splice(0, "Drum");

console.log(removed);
