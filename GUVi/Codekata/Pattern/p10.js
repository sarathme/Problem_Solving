/*
Write a code to generate an inverted full pyramid pattern using stars.


Input Description:
Given an integer R indicates number of rows.

Where 1<=R<=100.

Output Description:
Print the star inverted full pyramid with the given integer R.

Sample Input :
5
Sample Output :
* * * * *
 * * * *
  * * *
   * *
    *
*/

const userInput = ["5"];

const num = +userInput[0];

for (let i = num; i > 0; i--) {
  const res = [];

  for (let space = 1; space <= num - i; space++) {
    res.push(" ");
  }

  for (let j = 1; j <= i; j++) {
    res.push("*");

    if (j !== i) {
      res.push(" ");
    }
  }

  console.log(res.join(""));
}
