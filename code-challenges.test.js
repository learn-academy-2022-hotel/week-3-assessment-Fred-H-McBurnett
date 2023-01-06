// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// Pseudocode:
  // 1. Create a test that will take in the const fibLength1 (which is the Fibonacci sequence) and fibLength2 (also the Fibonacci sequence) and return the outputs to the defined valued for the two constants
  // 2. Using the mathmatical properties to determine a Fibonacci sequence for fibLength1, which is to take the sequence out to the 6th value in the sequence (F(n)= F(n-1) + F(n-2), where F is the initial value of the sequence (which starts with 0), and goes out to the 6th place (which is a value of 8 at the index position 5.)
  // 3. Using a loop to iterate through the number provided by our two constants fibLength1 and fibLength2, apply the appropriate math to perform the calculations for the sequence
  // 4. Console.log the final output of each variable to ensure correct mathmatical equation is working, and to determine that the loop performs as needed

  // jest test setup:
    // create function(fibOutput) that 
    // 1. accepts the values given in the const fibLength1 and fibLength2
    // 2. fibOutput utizizes a loop to perform the correct sequence of iterations to provide the expected return
    // 2. returns the expected output [0, 1, 1, 2, 3, 5] for the const fibLength1
    // 3. returns the expected output [0, 1, 1, 2, 3, 5, 8, 13, 21, 34] for the const fibLength2

// a) Create a test with expect statements for each of the variables provided.
const fibLength1 = 6
// Expected output: [1, 1, 2, 3, 5, 8]

const fibLength2 = 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
// JEST TEST
// describe fibOutput =[] => {
//   it(takes the value of fibLength1) and performs the correct mathematical equation to create the expected output.
//   expect[1, 1, 2, 3, 5, 8]
//   it (takes the value of fibLength2) and performs the correct mathmatical equation to again create the expected output.
//   expect[1, 1, 2, 3, 5, 8, 13, 21, 34, 55]  
// }

// b) Create the function that makes the test pass.

// function fibOutput(num) {
//   // a is representing the first term,
//   // b is representing the second term, and
//   // c is representing the sum of x and y.
//   var answer = [];
//   var a = 1;
//   var b = 1;
//   var c;

//   // Storing the first two terms.
//   term.push(a);
//   term.push(b);

//   var i = 2;
//   while (i < num) {
//     c = a + b;
//     a = b;
//     b = c;

//     // Storing the current element
//     term.push(c);
//     i = i + 1;
//   }
//   return answer;
// }

// var num = fibLength1;
// answer = fibOutput(num);

// console.log(answer);

// var num = fibLength2;
// answer = fibOutput(num);

// console.log(answer)


// --------------------2) Create a function that takes in an object and returns an array of the values sorted from least to greatest.
// Hint: Check out this resource: Object.values() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values

// a) Create a test with expect statements for each of the variables provided.

const studyMinutesWeek1 = {
  sunday: 90,
  monday: 30,
  tuesday: 20,
  wednesday: 15,
  thursday: 30,
  friday: 15,
  saturday: 60
}
// Expected output: [15, 15, 20, 30, 30, 60, 90]

const studyMinutesWeek2 = {
  sunday: 100,
  monday: 10,
  tuesday: 45,
  wednesday: 60,
  thursday: 20,
  friday: 15,
  saturday: 65
}
// Expected output: [10, 15, 20, 45, 60, 65, 100]

// b) Create the function that makes the test pass.

// PseudoCode
// Input: object with named key and value
// Output: array of values sorted lowest to highest

// 1. Declare function timesSwapped which takes an object as argument
// 2. Remove values from each property in the object
// 3. Create array containing the values removed from the object
// 4. Sort the values extracted lowest to highest
// 5. Output the sorted values

const timesSwapped = (timesSorted) => {
  return Object.values(timesSorted).sort((a, b) => a - b)
}

console.log(timesSwapped(studyMinutesWeek1))
console.log(timesSwapped(studyMinutesWeek2))

	// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.
	
	// a) Create a test with expect statements for each of the variables provided.
	
	const accountTransactions1 = [100, -17, -23, -9]
  // Expected output: [100, 83, 60, 51]
	
	const accountTransactions2 = [250, -89, 100, -96]
	// Expected output: [250, 161, 261, 165]
	
	const accountTransactions3 = []
	// Expected output: []
	
	// // b) Create the function that makes the test pass.

  // Jest test
  // describe ("total_Transaction", () => {
  //   expect(total_Transaction(accountTransactions1)).toEqual([100, 83, 60, 51])
  //   expect(total_Transaction(accountTransactions2)).toEqual([250, 161, 261, 165])
  //   expect(total_Transaction(accountTransactions3)).toEqual([])
  // })

  const total_Transaction = (array) => {
    return array.length > 0 ? array.map((sum = 0, n => sum += n)) : []
  }

  console.log(total_Transaction(accountTransactions1))
  console.log(total_Transaction(accountTransactions2))
  console.log(total_Transaction(accountTransactions3))
