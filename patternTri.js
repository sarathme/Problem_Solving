const row = 4;

for (let i = 1; i <= row; i++) {
  let pattern = " ".repeat(row - i);

  for (let j = 1; j <= i; j++) {
    if (j === 1 || j === i) {
      pattern += "2 ";
    } else {
      const val = 2 ** (i - 1);

      pattern += val + " ";
    }
  }

  console.log(pattern);
}
