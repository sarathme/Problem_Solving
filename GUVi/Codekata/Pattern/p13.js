/*
Write a code to generate the following pattern.

*********

b*******b

bb*****bb

bbb***bbb

bbbb*bbbb


Input Description:
Input consists of a single integer that corresponds to R, the number of rows. R is always an odd number.

Where 1<=R<=100.

Output Description:
Print the character with the letter 'b' pattern with the size based on the given integer R.

Sample Input :
5
Sample Output :
*********
b*******b
bb*****bb
bbb***bbb
bbbb*bbbb
*/

const userInput = ["6"];

const num = +userInput[0];

for (let i = num; i > 0; i--) {
  const res = [];

  for (let space = 1; space <= num - i; space++) {
    res.push("b");
  }

  for (let stars = 1; stars < num * 2 - (num - i) * 2; stars++) {
    res.push("*");
  }
  for (let space = 1; space <= num - i; space++) {
    res.push("b");
  }

  console.log(res.join(""));
}
