/*
3. Write a code to generate a half pyramid pattern using numbers.


Input Description:
Given an integer R indicates number of rows.

Where 1<=R<=100.

Output Description:
Print the number half pyramid pattern with the size R.

Sample Input :
5
Sample Output :
1
22
333
4444
55555
*/

const userInput = ["5"];

const num = +userInput[0];

const res = [];

for (let i = 1; i <= num; i++) {
  const res = [];
  for (let j = 1; j <= i; j++) {
    res.push(i);
  }

  console.log(res.join(""));
}
