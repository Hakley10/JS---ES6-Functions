// THE CONTEXT
// In the provided code, there's an array named shoppingCart representing a user's shopping cart with items containing 'name', 'price', and 'quantity' properties.
// The current code calculates the total price of items in the shopping cart without using functions.

// THE PROBLEM
// - This code works only for this specific shopping cart. But we want to be able to compute the total price for any shopping cart

// YOUR JOB
// Your task is to refactor the code by extracting the logic for calculating the total price into a reusable function.
// Write a function named calculateTotalPrice that takes the shoppingCart array as a parameter and returns the total price.

// TO CHECK
// Check that your code still produce the same result
// Check that your code can work with myny shopping carts

let shoppingCart = [
  { name: "Apples", price: 2.5, quantity: 3 },
  { name: "Bananas", price: 1.5, quantity: 2 },
  { name: "Oranges", price: 3, quantity: 1 },
];

let shoppingCart2 = [
  { name: "Iphone 13 Pro", price: 1000, quantity: 1 },
  { name: "Iphone 1280 Pro Max", price: 9999, quantity: 1 },
];

// Calculate total price without using functions
function calculateTotalPrice(shoppingCart) {
  let totalPrice = 0;
  for (let item of shoppingCart) {
    totalPrice += item.price * item.quantity;
  }
  return totalPrice;
}

console.log("Total price:", calculateTotalPrice(shoppingCart));
console.log("Total price:", calculateTotalPrice(shoppingCart2));