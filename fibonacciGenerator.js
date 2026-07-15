function fibonacciGenerator (n) {
    
      const secuence = [0, 1];

  for (let i = 2; i < n; i++) {
    secuence.push(secuence[i - 1] + secuence[i - 2]);
  }
  return secuence.slice(0, n);
}

console.log(fibonacciGenerator(6));
