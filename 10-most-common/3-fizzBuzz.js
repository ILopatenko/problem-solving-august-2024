console.clear();

const helper = require('../main-helper/MainHelper');

console.log(`TASK NAME:`);

const fizzBuzzRegular = n => {
   const result = [];
   for (let i = 1; i <= n; i++) {
      let value = '';
      if (i % 3 === 0) value += 'Fizz';
      if (i % 5 === 0) value += 'Buzz';
      value ? result.push(value) : result.push(i);
   }
   return result;
};

const fizzBuzzShort = n => {
   const result = [];
   for (let i = 1; i <= n; i++) {
      let value = '';
      if (!(i % 3)) value += 'Fizz';
      if (!(i % 5)) value += 'Buzz';
      result.push(value ? value : i);
   }
   return result;
};

const answer = fizzBuzzShort2(100);
console.log(answer);
