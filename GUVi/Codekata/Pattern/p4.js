/*
4. Generate a half pyramid pattern using numbers.


Input Description:
Given an integer R indicates number of rows.

Where 1<=R<=100.

Output Description:
Print the half pyramid pattern based on the given integer R.

Sample Input :
5
Sample Output :
1
12
123
1234
12345

*/

const userInput = ["5"];

const num = +userInput[0];

const res = [];

for (let i = 1; i <= num; i++) {
  const res = [];
  for (let j = 1; j <= i; j++) {
    res.push(j);
  }

  console.log(res.join(""));
}
