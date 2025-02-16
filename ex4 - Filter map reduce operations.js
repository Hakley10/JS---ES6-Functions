let numbers = [1, 2, 3, 4, 5];

// Write the function to filter out even numbers from an array
// You need to use the array.filter() function
function filterEvenNumbers(numbers) {
  // TODO - Your code here (1 line)
  return numbers.filter((numbers) => numbers % 2 == 0);
}

// Function to map array elements to their squared values
// You need to use the array.map() function
function squareNumbers(numbers) {
  //  TODO - Your code here (1 line)
  return numbers.map((numbers) => numbers * numbers);
}

// Function to compute the sum of array elements
// You need to use the array.reduce() function
function sumArray(numbers) {
  //  TODO - Your code here (1 line)
  return numbers.reduce((currentTotals, numbers) => (currentTotals += numbers));
}

console.log("Even numbers:", filterEvenNumbers(numbers)); // [2, 4]
console.log("Squared numbers:", squareNumbers(numbers)); // [1, 4, 9, 16, 25]
console.log("Sum of numbers:", sumArray(numbers)); // 15