/*
12. Generate a floyd's triangle.


Input Description:
Given an integer R indicates number of rows.

Where 1<=R<=100.

Output Description:
Print a floyd's triangle based on the given integer R.

Sample Input :
5
Sample Output :
1
2 3
4 5 6
7 8 9 10
11 12 13 14 15

*/

const userInput = ["6"];

const num = +userInput[0];
let count = 1;
for (let i = 1; i <= num; i++) {
  const res = [];

  for (let j = 1; j <= i; j++) {
    res.push(count);
    count++;
    if (i !== j) {
      res.push(" ");
    }
  }

  console.log(res.join(""));
}
