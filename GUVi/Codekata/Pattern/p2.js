/*
2. Write a code to generate a inverted half pyramid pattern using numbers.


Input Description:
Given an integer R indicates number of rows.

Where 1<=R<=100

Output Description:
Print the number half pyramid pattern with the size R.

Sample Input :
5
Sample Output :
12345
1234
123
12
1

*/

const userInput = ["5"];

const num = +userInput[0];

const res = [];

for (let i = num; i > 0; i--) {
  const res = [];
  for (let j = 1; j <= i; j++) {
    res.push(j);
  }

  console.log(res.join(""));
}
