/*
11. Write a code to generate a pyramid pattern using stars from the given input size N.


Input Description:
Given an integer R indicates number of rows.

Where 1<=R<=100.

Output Description:
Print the star pyramid with the given integer R.

Sample Input :
5
Sample Output :
*
* *
* * *
* * * *
* * * * *
*/

const userInput = ["6"];

const num = +userInput[0];

for (let i = 1; i <= num; i++) {
  const res = [];

  for (let j = 1; j <= i; j++) {
    res.push("*");
    if (i !== j) {
      res.push(" ");
    }
  }

  console.log(res.join(""));
}
