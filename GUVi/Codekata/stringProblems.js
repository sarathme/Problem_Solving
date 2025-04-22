// const userInput = ["abc"];

// const string = userInput[0].toLowerCase();

// let res = 1;

// for (let i = 0; i < Math.ceil(string.length / 2); i++) {
//   console.log(string[i]);
//   //   console.log(string[string.length - 1 - i]);
//   if (string[i] !== string[string.length - 1 - i]) {
//     res = -1;
//     break;
//   }
// }

// console.log(res);
// console.log(
//   userInput[0].split("").reduce((acc, curr) => (acc += curr.charCodeAt(0)), 0)
// );
// const str = userInput[0];
// let res = "";

// for (let i = str.length - 1; i >= 0; i--) {
//   res += str[i];
// }

// console.log(res[0].toUpperCase() + res.slice(1));

// const userInput = ["The sun rises in the east"];
// const index = +userInput[2];

// const operation = +userInput[1];
// const str = userInput[0].split("").map((el, i) => {
//   console.log(i + 1 === index);
//   if ((i + 1) % index === 0) {
//     return operation === 1 ? el.toLowerCase() : el.toUpperCase();
//   }
//   return el;
// });

// console.log(str);
// console.log(str.join(""));

// const strArr = userInput[0].split(" ");
// const articlesArr = ["a", "an", "the"];
// const res = [];

// strArr.forEach((el, i) => {
//   if (articlesArr.includes(el.lowerCase())) {
//     res.push(strArr[i + 1]);
//   }
// });

// console.log(res.join(" "));

// const userInput = ["{({})}}"];
// const parenArr = userInput[0].split("");

// res = 1;

// for (let i = 0; i < Math.ceil(parenArr.length / 2); i++) {
//   console.log(i);
//   if (parenArr[i] === parenArr[parenArr.length - 1 - i]) {
//     res = 0;
//     break;
//   }
// }

// console.log(res);

// const userInput = ["mississipie"];
// const str = userInput[0];
// let count = 0;
// let res = 0;
// for (let i = 0; i < str.length - 1; i++) {
//   if (str[i] === str[i + 1]) {
//     count++;
//   } else {
//     count = 0;
//   }

//   if (count === 2) {
//     res++;
//   }
// }

// console.log(res);

// console.log(userInput[0].split("").reduce((acc, cur) => (acc += 1), 0));

// const str = userInput[0];

// const ocuurancesObj = {};
// let res = "";

// str.split("").forEach((el) => {
//   ocuurancesObj[el] = (ocuurancesObj[el] || 0) + 1;
// });

// for (const property in ocuurancesObj) {
//   if (ocuurancesObj[property] == 1) {
//     res += property;
//   }
// }

// console.log(res);

// const userInput = ["Ammz"];
// const str = userInput[0];

// let res;

// res =
//   ["a", "A"].includes(str[0]) &&
//   ["m", "M"].includes(str[Math.floor(str.length / 2)]) &&
//   ["z", "Z"].includes(str[str.length - 1]);

// console.log(res ? 1 : 0);

// const userInput = ["I enjoy doing codekata", "codekata"];
// const str = userInput[1];

// const res = userInput[0].split(" ").reduce((acc, cur) => {
//   if (cur === str) {
//     return (acc += 1);
//   }
//   return acc;
// }, 0);

// console.log(res );

// const userInput = ["20"];

// const carRepairTime = 10;
// const noOfCars = +userInput[0];
// const minsForNextArrival = +userInput[1];

// const res = (noOfCars - 1) * (carRepairTime - minsForNextArrival);

// console.log(Math.max(0, res));

// const numArr = userInput[0].split("").map(Number);

// const res = numArr.reduce((acc, cur, i) => {
//   if (i >= numArr.length - 2) {
//     return (acc += el);
//   }

//   return acc;
// });

// console.log(res % 4 === 0 ? "yes" : "no");
// const userInput = ["7", "1 2 3 4 4 4 5 1 1"];

// const freq = {};
// const numArr = userInput[1]
//   .split(" ")
//   .map(Number)
//   .forEach((el) => {
//     freq[el] = (freq[el] || 0) + 1;
//   });

// let count = 0;
// let res;

// for (const prop in freq) {
//   if (freq[prop] > count) {
//     count = freq[prop];
//     res = prop;
//   }
// }

// console.log(res);

// const userInput = ["i am jsb"];
// const strArr = userInput[0].split(" ");
// const len = strArr.length;

// const stack = [];
// for (let i = 0; i < len; i++) {
//   stack.push(strArr.pop());
//   console.log(stack);
// }

// console.log(stack.join(" "));

// const str = "";

// const ch = str.charCodeAt(0);
// console.log(ch);
// const isLet =
//   (ch >= 65 && ch <= 90) || (ch >= 97 && ch <= 122) || (ch >= 48 && ch <= 57);

// console.log(isLet);

// const userInput = ["A man, in the boat says : I see 1-2-3 in the sky"];
// const str = userInput[0];
// const strCleaned = str.split("").filter((el) => {
//   const ch = el.charCodeAt(0);
//   return (
//     (ch >= 65 && ch <= 90) || (ch >= 97 && ch <= 122) || (ch >= 48 && ch <= 57)
//   );
// });

// let j = strCleaned.length - 1;

// let res = "";

// for (let i = 0; i < str.length; i++) {
//   const isLet =
//     (str[i].charCodeAt(0) >= 65 && str[i].charCodeAt(0) <= 90) ||
//     (str[i].charCodeAt(0) >= 97 && str[i].charCodeAt(0) <= 122) ||
//     (str[i].charCodeAt(0) >= 48 && str[i].charCodeAt(0) <= 57);

//   if (isLet) {
//     res += strCleaned[j];
//     j--;
//   } else {
//     res += str[i];
//   }
// }

// console.log(res);
const userInput = ["Geeksforgeek"];
const str = userInput[0];
let res = "";

for (let i = 0; i < str.length; i++) {
  if (str[i] !== str[i + 1]) {
    res += str[i];
  } else {
    i++;
  }
}
console.log(res);
