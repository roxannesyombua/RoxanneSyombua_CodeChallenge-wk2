// Ask the user to enter input and convert to numbers
let input = prompt("Enter an array of numbers");

// Convert input string to an array of numbers
let numbers = input.split(',').map(Number);

//function to check if number is prime
function findPrimes(number) {

    if (number <= 1)
        return false;
    if (number <= 3)
        return true;
    if (number % 2 === 0 || number % 3 === 0)
        return false;
    for (let i = 3; i <= number; i++) {
        let isPrime = true;

    for (let i = 5; i * i <= number; i += 6) {
            if (number % i === 0 || number % (i + 2) === 0) return false;
        }
        return true;
    }
}
    // Function to filter prime numbers from an array
    function filterPrimeNumbers(array) {
        return array.filter(num => findPrimes(num));
    }

    // Output the prime numbers from the input array
    window.alert("Prime Numbers" + filterPrimeNumbers(numbers).join(','));
    console.log("Prime Numbers", filterPrimeNumbers(numbers));
