class MainHelper {
   getRandomNumberFromTo = (min = 0, max = 9) => Math.floor(Math.random() * (max + 1 - min)) + min;
   getRandomElementFromGivenSet = set => set[this.getRandomNumberFromTo(0, set.length - 1)];

   getRandomEngLetterLower = () =>
      this.getRandomElementFromGivenSet(this.sets.strings.alphabet.engLower);

   generateRandomEngLowerStringWithGivenLength = length => {
      let string = '';
      for (let i = 0; i < length; i++) string += this.getRandomEngLetterLower();
      return string;
   };

   //
   solutionEfficiencyChecker = (solution1, solution2, testData) => {
      const timeExecution = (solution, data) => {
         const startTime = Date.now();
         solution(data);
         const finishTime = Date.now();
         const time = finishTime - startTime;
         return time;
      };

      const timeExecutionSolution1 = timeExecution(solution1, testData);
      const timeExecutionSolution2 = timeExecution(solution2, testData);

      console.log({ timeExecutionSolution1, timeExecutionSolution2 });

      if (timeExecutionSolution1 < timeExecutionSolution2) {
         console.log(`Solution 1 is more efficient`);
         const lessEffective = Math.floor((timeExecutionSolution2 * 100) / timeExecutionSolution1);
         console.log(`if solution 1 runtime is 100% then solution 2 runtime is ${lessEffective}%`);
         const timesLessEffective = Math.floor(lessEffective / 10) / 10;
         console.log(
            `It means solution 1 is about ${timesLessEffective} times more efficient than solution 2`
         );
      } else {
         console.log(`Solution 2 is more efficient`);
         const lessEffective = Math.floor((timeExecutionSolution1 * 100) / timeExecutionSolution2);
         console.log(`if solution 2 runtime is 100% then solution 1 runtime is ${lessEffective}%`);
         const timesLessEffective = Math.floor(lessEffective / 10) / 10;
         console.log(
            `It means solution 2 is about ${timesLessEffective} times more efficient than solution 1`
         );
      }
   };

   //FOR COMMON TASKS
   //PALINDROME
   generateInvalidPalindromeWithGivenLengthWorstCase = length => {
      const lengthForGen = length % 2 === 0 ? (length - 2) / 2 : (length - 3) / 2;
      let leftPart = '';
      let rightPart = '';
      for (let i = 0; i < lengthForGen; i++) {
         let newLetter = this.getRandomEngLetterLower();
         leftPart += newLetter;
         rightPart = newLetter + rightPart;
      }
      const nonPair1 = this.getRandomEngLetterLower();
      let nonPair2 = this.getRandomEngLetterLower();
      while (nonPair1 === nonPair2) {
         nonPair2 = this.getRandomEngLetterLower();
      }
      const result =
         length % 2 === 0
            ? leftPart + nonPair1 + nonPair2 + rightPart
            : leftPart + nonPair1 + this.getRandomEngLetterLower() + nonPair2 + rightPart;
      return result;
   };

   generateValidPalindromeWithGivenLength = length => {
      const lengthForGen = length % 2 === 0 ? length / 2 : (length - 1) / 2;
      let leftPart = '';
      let rightPart = '';
      for (let i = 0; i < lengthForGen; i++) {
         let newLetter = this.getRandomEngLetterLower();
         leftPart += newLetter;
         rightPart = newLetter + rightPart;
      }
      const result =
         length % 2 === 0
            ? leftPart + rightPart
            : leftPart + this.getRandomEngLetterLower() + rightPart;
      return result;
   };

   sets = {
      strings: {
         alphabet: {
            engLower: 'abcdefghijklmnopqrstuvwxyz',
         },
         names: {
            males: [
               'James',
               'Michael',
               'Robert',
               'John',
               'David',
               'William',
               'Richard',
               'Joseph',
               'Thomas',
               'Christopher',
               'Charles',
               'Daniel',
               'Matthew',
               'Anthony',
               'Mark',
               'Donald',
               'Steven',
               'Andrew',
               'Paul',
               'Joshua',
               'Kenneth',
               'Kevin',
               'Brian',
               'Timothy',
               'Ronald',
               'George',
               'Jason',
               'Edward',
               'Jeffrey',
               'Ryan',
               'Jacob',
               'Nicholas',
               'Gary',
               'Eric',
               'Jonathan',
               'Stephen',
               'Larry',
               'Justin',
               'Scott',
               'Brandon',
               'Benjamin',
               'Samuel',
               'Gregory',
               'Alexander',
               'Patrick',
               'Frank',
               'Raymond',
               'Jack',
               'Dennis',
               'Jerry',
               'Tyler',
               'Aaron',
               'Jose',
               'Adam',
               'Nathan',
               'Henry',
               'Zachary',
               'Douglas',
               'Peter',
               'Kyle',
               'Noah',
               'Ethan',
               'Jeremy',
               'Christian',
               'Walter',
               'Keith',
               'Austin',
               'Roger',
               'Terry',
               'Sean',
               'Gerald',
               'Carl',
               'Dylan',
               'Harold',
               'Jordan',
               'Jesse',
               'Bryan',
               'Lawrence',
               'Arthur',
               'Gabriel',
               'Bruce',
               'Logan',
               'Billy',
               'Joe',
               'Alan',
               'Juan',
               'Elijah',
               'Willie',
               'Albert',
               'Wayne',
               'Randy',
               'Mason',
               'Vincent',
               'Liam',
               'Roy',
               'Bobby',
               'Caleb',
               'Bradley',
               'Russell',
            ],
            females: [
               'Mary',
               'Patricia',
               'Jennifer',
               'Linda',
               'Elizabeth',
               'Barbara',
               'Susan',
               'Jessica',
               'Karen',
               'Sarah',
               'Lisa',
               'Nancy',
               'Sandra',
               'Betty',
               'Ashley',
               'Emily',
               'Kimberly',
               'Margaret',
               'Donna',
               'Michelle',
               'Carol',
               'Amanda',
               'Melissa',
               'Deborah',
               'Stephanie',
               'Rebecca',
               'Sharon',
               'Laura',
               'Cynthia',
               'Dorothy',
               'Amy',
               'Kathleen',
               'Angela',
               'Shirley',
               'Emma',
               'Brenda',
               'Pamela',
               'Nicole',
               'Anna',
               'Samantha',
               'Katherine',
               'Christine',
               'Debra',
               'Rachel',
               'Carolyn',
               'Janet',
               'Maria',
               'Olivia',
               'Heather',
               'Helen',
               'Catherine',
               'Diane',
               'Julie',
               'Victoria',
               'Joyce',
               'Lauren',
               'Kelly',
               'Christina',
               'Ruth',
               'Joan',
               'Virginia',
               'Judith',
               'Evelyn',
               'Hannah',
               'Andrea',
               'Megan',
               'Cheryl',
               'Jacqueline',
               'Madison',
               'Teresa',
               'Abigail',
               'Sophia',
               'Martha',
               'Sara',
               'Gloria',
               'Janice',
               'Kathryn',
               'Ann',
               'Isabella',
               'Judy',
               'Charlotte',
               'Julia',
               'Grace',
               'Amber',
               'Alice',
               'Jean',
               'Denise',
               'Frances',
               'Danielle',
               'Marilyn',
               'Natalie',
               'Beverly',
               'Diana',
               'Brittany',
               'Theresa',
               'Kayla',
               'Alexis',
               'Doris',
               'Lori',
               'Tiffany',
            ],
         },
      },
   };
}

module.exports = new MainHelper();
