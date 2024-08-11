console.clear();

const helper = require('../main-helper/MainHelper');

const checkIfAnagramms = (string1, string2) => {
   if (string1.length !== string2.length) return false;

   getHash = str => {
      const hash = {};
      for (let letter of str) hash[letter] = hash[letter] + 1 || 1;
      return hash;
   };

   const hashString1 = getHash(string1);
   const hashString2 = getHash(string2);

   const compareHashes = (hash1, hash2) => {
      for (let letter in hash1) if (hash1[letter] !== hash2[letter]) return false;
      return true;
   };

   return compareHashes(hashString1, hashString2);
};

const testString1 = helper.generateRandomEngLowerStringWithGivenLength(15);

const answer = checkIfAnagramms(testString1, testString1);

console.log(`The final answer is`, answer);
