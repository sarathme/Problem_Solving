function isPrime(num) {
  if (num < 2) return false;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

function generatePrime(n) {
  let num = 2;
  let res = [];
  while (res.length < n) {
    if (isPrime(num)) {
      res.push(num);
    }
    num++;
  }

  return res;
}

const primes = generatePrime(4);

let primeSet = new Set();
for (let i = 0; i < primes.length; i++) {
  for (let j = 0; j < primes.length; j++) {
    const diff = primes[i] - primes[j];
    if (isPrime(diff) && !primeSet.has(diff)) {
      primeSet.add(diff);
    }
  }
}

console.log([...primeSet].sort((a, b) => a - b).join(","));
