const getNthFibonacci = n => {
   const fibonacciArray = [0, 1];

   if (n <= 0) return false;
   if (n < 2) return fibonacciArray[n - 1];

   for (let i = 2; i < n; i++) {
      let prevPrev = fibonacciArray[fibonacciArray.length - 2];
      let prev = fibonacciArray[fibonacciArray.length - 1];
      let next = prevPrev + prev;
      fibonacciArray.push(next);
   }

   return fibonacciArray[fibonacciArray.length - 1];
};

const nthElement = 100;

const value = getNthFibonacci(nthElement);

console.log(`#${nthElement} fibonacci is "${value}"`);
