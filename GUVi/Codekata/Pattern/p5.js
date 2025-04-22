/*
5. Write a code to generate a pyramid using stars.


Input Description:
Given an integer R indicates number of rows.

Where 1<=R<=100.

Output Description:
Print the pyramid pattern using stars based on the given integer R.

Sample Input :
6
Sample Output :
     *
    **
   ***
  ****
 *****
******
*/

const userInput = ["6"];

const num = +userInput[0];

for (let i = 1; i <= num; i++) {
  const res = [];
  for (let j = 1; j <= num; j++) {
    if (j >= num - i + 1) {
      res.push("*");
    } else {
      res.push(" ");
    }
  }

  console.log(res.join(""));
}
