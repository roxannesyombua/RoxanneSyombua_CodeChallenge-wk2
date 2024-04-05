// Ask the user to enter input and convert to number
let num1 = parseInt(prompt ("Enter First number"));
let num2 = parseInt(prompt ("Enter Second number"));

//Function to generate an array of numbers between two values 
function createArray(num1, num2) {
  
    if (num1 > num2) {
    // If start is greater than end, create a new array and fill it in reverse order
    const array = Array.from({ length: num1 - num2 + 1 }, (_, index) => num1 - index);
    return array;
  } else {
    // If start is less than or equal to end, create a new array and fill it in ascending order
    const array = Array.from({ length: num2 - num1 + 1 }, (_, index) => num1 + index);
    return array;
  }
}

// Output the result of generating an array 
window.alert(createArray(num1, num2));
console.log(createArray(num1, num2));


