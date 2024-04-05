// Ask user to enter text
let text = prompt("Enter your text here");

// Function to swap the cases

function ChangeCase(str) {
     // Convert the string to an array of characters
     const characters = str.split('');
    
    for (let y = 0; y < characters.length; y++) {
       
        // Check if the character is uppercase'[]
        if (characters[y] === characters[y].toUpperCase()) {
           
            // If uppercase, convert it to lowercase
            characters[y] = characters[y].toLowerCase();
        } else {
            // If lowercase, convert it to uppercase
            characters[y] = characters[y].toUpperCase();
        }
    }
    // Join the characters back into a string and return
    return characters.join('');
}
// Test the function
window.alert(ChangeCase(text));
console.log(ChangeCase(text));