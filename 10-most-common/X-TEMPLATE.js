console.clear();

const helper = require('../main-helper/MainHelper');

console.log(`TASK NAME:`);

const solution1 = str => {
   for (let i = 0; i <= str.length / 2 - 1; i++)
      if (str[i] !== str[str.length - 1 - i]) return false;
   return true;
};

const solution2 = str => {
   for (let i = 0; i <= str.length / 2 - 1; i++)
      if (str[i] !== str[str.length - 1 - i]) return false;
   return true;
};

const testData = helper.generateValidPalindromeWithGivenLength(20000000);

helper.solutionEfficiencyChecker(solution1, solution2, testData);
