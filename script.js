// Assignment Code

// MY PSEUDO CODE NOTES
// Step 1 - Prompt the user.
  // Password Length between 8 -128
  // Lowercase, uppercase, numerical, and special characters
// Step 2 - Input validation
// Step 3 - Generate password based on criteria 
// Step 4 - Display the password on the page

// START OF PROJECT 

// References the "id generate" in HTML line 30
var generateBtn = document.querySelector("#generate");

// LIST CHARACTERS (upper, lower, numerical, symbols)

// List of lowercase letters
const isLower  = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// List of uppercase letters
const isUpper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

// List of numerical characters
const isNum  = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

// List of special characters
const isSpecial  = ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '>', '?', '@', '[', ']', '^', '_', '`', '{', '|', '}', '~',];

// Create the function to generate a password. Closing bracket on line 95.
function generatePassword() {
  var userPassword = "";
  
// Prompt the user. Use a variable to capture the user input. 
// Using window.prompt instead of prompt b/c window represent the whole list, or the global script.
var pwLength = window.prompt("Your password must be between 8 - 128 characters.\nHow long do you want the password to be?");


// Create and if/ifelse/else statement to make sure the user input is a number between 1 -128.
// if (isNaN(passwordLength)) {
//   window.alert("You must enter a numerical value")
// } 
if (pwLength >= 8 && pwLength <= 128) {
  // Prompt user to ask if they want lowercase, uppercase, numerical, special charaters.
  var includeLower = window.confirm("Would you like your password to include lowercase letters?\n\nClick 'OK' for YES.\nClick'CANCEL' for NO.");
  var includeUpper = window.confirm("Would you like your password to include uppercase letters?\n\nClick 'OK' for YES.\nClick'CANCEL' for NO.");
  var includeNum = window.confirm("Would you like your password to include numbers?\n\nClick 'OK' for YES.\nClick'CANCEL' for NO.'");
  var includeSpecial = window.confirm("Would you like your password to include special characters?\n\nClick 'OK' for YES.\nClick'CANCEL' for NO.");

// Create if statement to make sure the user chooses at least one of the 4 character choices.
if (includeLower === false && includeUpper === false && includeNum === false && includeSpecial === false) {
  window.alert("You must select at least one character type.\nPlease click on the Generate Password button and try again.");
  // return null so if the conditions aren't met, if not the text box shows "undefined" repeated.
  return null;
  }
// Error message if the user enter a char other than a number between 1 - 128
  } else {
    window.alert(`${pwLength} is not a valid number.\nPlease click the Generate Password button and try again.`);
     // return null so if the conditions aren't met, if not the text box shows "undefined" repeated.
    return null; 
  };
  
var userChar = [];

// Series of 'if' statements to sort out what characters the user selects to use in their password
if (includeLower === true) {
    userChar = userChar.concat(isLower);
  }
if (includeUpper === true) {
    userChar = userChar.concat(isUpper);
  }
if (includeNum === true) {
    userChar = userChar.concat(isNum);
  }
if (includeSpecial === true) {
    userChar = userChar.concat(isSpecial);
  };


//  console.log(userChar); Used for testing code for userChar

// Use iterator and increment to store in the indexRange variable. 
// Use math.random for decimal, Math.floor to round up. Multiply by userChar.length
// console.log the indexRange
// set the userPassword using the userChar[indexRange]
for (let i = 0; i < pwLength; i++) {
    var indexRange = Math.floor(Math.random() * userChar.length);
    console.log("indexRange", indexRange);
    userPassword = userPassword + userChar[indexRange];
};

// Returns the randomly generated user password
return userPassword;
 
};

// 1. Write password to the #password input
// Create a function to write the password to #password
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

// 3. Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




//** ALT way of getting letters, numbers, special characters, but seemed to be more complicated then needed. 

// Create a function that uses a String Object that uses the method "fromCharCode"
// to get any character based on their code.
// The link below has the different codes for the all the characrers. 
// http://www.net-comber.com/charset.html 
// Use CharCode to get the characters.
// Use "Math.floor" to round down "Math.random" and multiply by 26 
// b/c there are 26 letters in the alphabet. 
// Add 97 at the end b/c the code for lowercase starts at 97 and goes to 122.
// This will generate a random number between 1-26
// and generate a random letter between a-z lowercase.
// function getLower() {
//   return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
// }

// // Get random uppercase letter which starts at 65 
// // so add 65 at the end instead of 97.

// function getUpper() {
//   return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
// }

// // Get random number. Numbers 0 - 9 start with the code 48 so add 48 to the end.
// function getNum() {
//   return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
// }


