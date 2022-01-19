// Now this are my 2 variables

const numA = Number.parseFloat(
  prompt("Welcome to the Calculator \n\n  Introduce a number please")
);
const numB = Number.parseFloat(prompt("Introduce your second number please"));
// This function rounds to 3 decimals if I have remainder different from 0
const roundNum = (toRound) => {
  if (toRound % 1 !== 0) {
    return toRound.toFixed(3);
  }
  return toRound;
};
// I need to make a decision tree to view every possible case

// If a have any NAN in my variables I run this code

// I define a function to operate and print the numbers

function OperatePrint(inputA, inputB) {
  console.log(`This is the number B:    ${inputB}`);
  console.log(`The sum of those numbers is: ${roundNum(inputA + inputB)}`);
  console.log(`The rest of those numbers is: ${roundNum(inputA - inputB)}`);
  console.log(
    `The multiplication of those numbers is: ${roundNum(inputA * inputB)}`
  );
  console.log(`The division of those numbers is: ${roundNum(inputA / inputB)}`);
}

if (Number.isNaN(numA) || Number.isNaN(numB)) {
  // If I have both Nan I just console.log that i cant work with that
  if (Number.isNaN(numA) && Number.isNaN(numB)) {
    console.log("We dont have a valid number to work with :( ");
    // Else if the Nan is in numA i work with the numB
  } else if (Number.isNaN(numA)) {
    console.log(
      `The SquareRoot of the second number is: ${roundNum(Math.sqrt(numB))}`
    );
    // The last case will be always numA being the Nan
  } else {
    console.log(
      `The SquareRoot of the first number is: ${roundNum(Math.sqrt(numA))}`
    );
  }

  // Else I go with the normal case and I call my function to find the answer
} else {
  OperatePrint(numA, numB);
}

// TESSSSSSSTINGDSAFL;KJDSFL;KDSFJL;DSKJF

describe("Given a roundNum function", () => {
  describe("When it receives a 9", () => {
    test("Then it should return a 9", () => {
      // Arrange
      const testNumber = 9;
      const expectedRoundedNumber = 9;

      // Act
      const roundedNumber = roundNum(testNumber);

      // Assert
      expect(roundedNumber).toBe(expectedRoundedNumber);
    });
  });
});
