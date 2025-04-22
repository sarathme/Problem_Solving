/*
14. Generate the following inverted character with star pattern.

bbbb*bbbb

bbb***bbb

bb*****bb

b*******b

*********


Input Description:
Input consists of a single integer that corresponds to R, the number of rows. R is always an odd number. where 1<=R<=100.

Output Description:
Print the inverted character pattern from the given input size R.

Sample Input :
5
Sample Output :
bbbb*bbbb
bbb***bbb
bb*****bb
b*******b
*********
*/

const userInput = ["5"];

const num = +userInput[0];

for (let i = 1; i <= num; i++) {
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
