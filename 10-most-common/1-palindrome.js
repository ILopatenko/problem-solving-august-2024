console.clear();

const helper = require('../main-helper/MainHelper');

console.log(`PALINDROME:`);

const palindrome_for = str => {
   for (let i = 0; i <= str.length / 2 - 1; i++)
      if (str[i] !== str[str.length - 1 - i]) return false;
   return true;
};

const palindrome_for_full_length = str => {
   for (let i = 0; i <= str.length; i++) if (str[i] !== str[str.length - 1 - i]) return false;
   return true;
};

const palindrome_short = str => str === str.split('').reverse().join('');

//const testPalindrome = helper.generateInvalidPalindromeWithGivenLengthWorstCase(20000000);
const testPalindrome = helper.generateValidPalindromeWithGivenLength(20000000);

helper.solutionEfficiencyChecker(palindrome_short, palindrome_for, testPalindrome);

helper.solutionEfficiencyChecker(palindrome_for, palindrome_for_full_length, testPalindrome);
