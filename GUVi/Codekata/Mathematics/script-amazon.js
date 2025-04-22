// const userInput = ["5 4", "1 1 1 1 5"];

// const arr = userInput[1].split(" ").map(Number);

// const k = +userInput[0].split(" ")[1];

// arr.sort((a, b) => a - b);

// console.log(arr, k);
// console.log(arr[k - 1] === k ? arr[k - 1] : -1);

// const userInput = ["5", "1 3 4 2"];
// const n = +userInput[0];

// const arr = userInput[1].split(" ").map(Number);
// let res;
// const hash = Array.from({ length: n + 1 }, () => 0);
// for (let i = 0; i < n - 1; i++) {
//   hash[arr[i]]++;
// }
// for (i = 1; i <= n; i++) {
//   if (hash[i] === 0) {
//     res = i;
//   }
// }

// console.log(res);

// const userInput = ["4", "2 3 4 4"];
// const arr = userInput[1].split(" ").map(Number);
// const res = [];

// for (let i = 0; i < arr.length; i++) {
//   const sum = arr.slice(0, i + 1).reduce((acc, el) => (acc += el), 0);

//   if (sum % 2 === 0) {
//     res.push(sum);
//   } else {
//     res.push(arr[i]);
//   }
// }

// console.log(res);

const userInput = ["6", "2 1 4 7 3 6"];

const arr = userInput[1].split(" ").map(Number);

let result = [];

for (let i = 0; i < arr.length; i++) {
  let tempSubarray = [arr[i]];
  while (i < arr.length - 1 && arr[i] <= arr[i + 1]) {
    tempSubarray.push(arr[i + 1]);
    i++;
  }

  if (tempSubarray.length > 1) {
    result.push(tempSubarray);
  }
}

console.log(
  result.reduce((acc, cur) => {
    const sum = cur.reduce((acc, cur) => (acc += cur), 0);

    return sum > acc ? sum : acc;
  }, 0)
);
