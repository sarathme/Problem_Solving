/*
6. Write a code to generate an inverted half pyramid pattern using stars.


Input Description:
Given an integer R indicates number of rows.

Where 1<=R<=100.

Output Description:
Print the star inverted pyramid with the given integer R.

Sample Input :
5
Sample Output :
*  *  *  *  *
*  *  *  *
*  *  *
*  *
*
*/
const userInput = ["5"];

const num = +userInput[0];

for (let i = 1; i <= num; i++) {
  const res = [];

  for (let j = 1; j <= num; j++) {
    if (j <= num - i + 1) {
      res.push("*");
    }
  }

  console.log(res.join("  "));
}
