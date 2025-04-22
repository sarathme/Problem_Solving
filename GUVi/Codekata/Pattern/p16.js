/*
16. Generate a hollow inverted half pyramid pattern using numbers.


Input Description:
Given an integer R indicates number of rows.

Where 1<=R<=100.

Output Description:
Print the hollow inverted half pyramid pattern using numbers based on the given integer R.

Sample Input :
5
Sample Output :
    1
   1 2
  1   3
 1     4
1 2 3 4 5
*/

const userInput = ["5"];

const num = +userInput[0];

for (let i = 0; i < num; i++) {
  const res = [];

  for (let space = 1; space < num - i; space++) {
    res.push(" ");
  }
  for (let j = 1; j <= i + 1; j++) {
    if (i + 1 < num && j > 1 && j < i + 1) {
      res.push(" ");
    } else {
      res.push(j);
    }
    if (j < i + 1) {
      res.push(" ");
    }
  }
  console.log(res.join(""));
}
