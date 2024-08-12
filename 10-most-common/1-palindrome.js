console.clear();

const helper = require('../main-helper/MainHelper');

console.log(`PALINDROME:`);

const testString = 'maddam';

const palindrome_with_explanation = string => {
   for (let i = 0; i <= string.length / 2 - 1; i++) {
      const left = string[i];
      const right = string[string.length - 1 - i];
      console.log('\n New iteration. ', { i, left, right });
      console.log(`Let's compare left and right letters`);
      if (left !== right) return false;
   }

   return true;
};

const palindrome_for = str => {
   for (let i = 0; i <= str.length / 2 - 1; i++)
      if (str[i] !== str[str.length - 1 - i]) return false;
   return true;
};

const palindrome_short = str => str === str.split('').reverse().join('');

const answer = palindrome_short(testString);
console.log('');
console.log({ testString, answer });
console.log(`\nThe final result for the test string "${testString}" is "${answer}"\n`);






console.log(helper.generateInvalidPalindromeWithGivenLengthWorstCase(7));
