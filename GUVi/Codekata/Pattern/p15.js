/*
15. Write a code to generate a half pyramid pattern using numbers.


Input Description:
Given an integer R indicates number of rows.

Where 1<=R<=100.

Output Description:
Print the number half pyramid pattern with the size R.

Sample Input :
5
Sample Output :
55555
4444
333
22
1
*/

const userInput = ["6"];

const num = +userInput[0];

for (let i = num; i > 0; i--) {
  const res = [];

  for (let j = 1; j <= i; j++) {
    res.push(i);
  }

  console.log(res.join(""));
}
