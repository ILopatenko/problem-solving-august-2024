//The vowels are “a”, “e”, “i”, “o”, “u”.
const helper = require('../main-helper/MainHelper');

const countVowels = string => {
   let counter = 0;
   for (let letter of string)
      if (letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u')
         counter++;
   return counter;
};

const testString = helper.generateRandomEngLowerStringWithGivenLength(15);
console.log(testString);

const answer = countVowels(testString);
console.log(`the final answer is "${answer}"`);
