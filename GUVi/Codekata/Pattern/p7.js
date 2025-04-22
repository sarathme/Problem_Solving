/*
7
Share
Write a code to generate a half pyramid number pattern.


Input Description:
Given an even integer R indicates number of rows.

Where 1<=R<=100.

Output Description:
Print the number half pyramid pattern with the size R.

Sample Input :
5
Sample Output :
12345
4321
123
21
1



*/

const userInput = ["6"];

const num = +userInput[0];

for (let i = 1; i <= num; i++) {
  const res = [];

  for (let j = 1; j <= num - i + 1; j++) {
    if (i % 2 !== 0) {
      res.push(j);
    } else {
      res.push(num - i + 2 - j);
    }
  }

  console.log(res.join(""));
}
