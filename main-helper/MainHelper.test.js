const helper = require('../main-helper/MainHelper');

console.clear();

const testGetRandomAndMinMax = (minValue = 0, maxValue = 9, testQuantity, testNumber) => {
   const defaultCustom = minValue === 0 && maxValue === 9 ? 'Default Values' : 'Custom Values';
   describe(`${testNumber} min = "${minValue}" and max = "${maxValue}" ${defaultCustom}`, () => {
      let isMinGenerated = false;
      let isMaxGenerated = false;
      for (let i = 0; i < testQuantity; i++) {
         const testValue =
            defaultCustom === 'Default values'
               ? helper.getRandomNumberFromTo()
               : helper.getRandomNumberFromTo(minValue, maxValue);
         if (testValue === minValue) isMinGenerated = true;
         if (testValue === maxValue) isMaxGenerated = true;
         describe(`${testNumber}.${i + 1} Test value is "${testValue}"`, () => {
            test(`"${testValue}" should be >= "${minValue}"`, () => {
               expect(testValue).toBeGreaterThanOrEqual(minValue);
            });
            test(`"${testValue}" should be <= "${maxValue}"`, () => {
               expect(testValue).toBeLessThanOrEqual(maxValue);
            });
         });
      }
      describe(`${testNumber}.${testQuantity + 1} Check if min value was generated`, () => {
         test(`min = "${minValue}"`, () => {
            expect(isMinGenerated).toBe(true);
         });
      });
      describe(`${testNumber}.${testQuantity + 2} Check if max value was generated`, () => {
         test(`max = "${maxValue}"`, () => {
            expect(isMaxGenerated).toBe(true);
         });
      });
   });
};

describe('Main Test Suite for my helper', () => {
   describe('1. #getRandomNumberFromTo', () => {
      testGetRandomAndMinMax(0, 9, 1000, '1.1');
      testGetRandomAndMinMax(-100, 100, 1000, '1.2');
   });
   describe('2. #getRandomElementFromGivenSet', () => {
      describe(`2.1. Test Suite for a string`, () => {
         for (let i = 0; i < 100; i++) {
            const randomElement = helper.getRandomElementFromGivenSet(
               helper.sets.strings.alphabet.engLower
            );
            test(`Test case #${i + 1}. Random element is "${randomElement}"`, () => {
               expect(helper.sets.strings.alphabet.engLower.includes(randomElement)).toBe(true);
            });
         }
      });
      describe(`2.2. Test Suite for an array`, () => {
         for (let i = 0; i < 100; i++) {
            const randomElement = helper.getRandomElementFromGivenSet(
               helper.sets.strings.names.males
            );
            test(`Test case #${i + 1}. Random element is "${randomElement}"`, () => {
               expect(helper.sets.strings.names.males.includes(randomElement)).toBe(true);
            });
         }
      });
   });
});

/* TEMPLATES



describe(`Main Test Suite for my helper`, () => {});
test(`This is a test descxription`, () => {});



 */
