//////////////////////////////////////////////////////////////////////////////////  CHALLENGE 5 INSTRUCTIONS   //////////////////////////////////////////////////////////////////////////////////

// Generate a password when the button is clicked
// Present a series of prompts for password criteria
// Length of password
// At least 8 characters but no more than 128.
// Character types
// Lowercase
// Uppercase
// Numeric
// Special characters ($@%&*, etc)
// Code should validate for each input and at least one character type should be selected

// Once prompts are answered then the password should be generated and displayed in an alert or written to the page


// Array of special characters to be included in password
var specialCharacters = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// Array of uppercase characters to be included in password
var upperCasedCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];


////////////////////////////////////////////////////////////////////////////        MY ATTEMPT BELOW          ////////////////////////////////////////////////////////////////////////////////////// 

const generatedPassword = [];

function getPasswordOptions() {

  // ask all the right questions
  var passLength = (parseInt(prompt("Please input the password character length you want (8-128)")));

  if (passLength.length >= 128 || passLength.length <= 8) {
    // CHECKS

        //prompts to select character type(s)
    var sChar = Boolean((confirm("do you want special characters? Click 'okay' to confirm")));
    var nChar = Boolean((confirm("do you want numeric characters? Click 'okay' to confirm")));
    var lChar = Boolean((confirm("do you want lower-cased characters? Click 'okay' to confirm")));
    var uChar = Boolean((confirm("do you want upper-cased characters? Click 'okay' to confirm")));


    if (sChar == true || nChar == true || lChar == true || uChar == true) {
      if (sChar == true) { generatedPassword += specialCharacters }
      if (nChar == true) { generatedPassword += numericCharacters }
      if (lChar == true) { generatedPassword += lowerCasedCharacters }
      if (uChar == true) { generatedPassword += upperCasedCharacters }
    }
    // CHECKS
    else {
      alert("Please select at least one character type");
    }
  }
  else {
    alert("Please enter a value between 8 and 128");
  }
console.log(generatedPassword);
}

// console.log(getPasswordOptions());


///// BELOW GERNERATES PASSWORD WITHOUT PROMPTING - CONCATENATED THE CHARACTERS ABOVE WITHOUT PROMPTING -- TRYING PROMPT ABOVE

// var charOptions = specialCharacters.concat(numericCharacters).concat(lowerCasedCharacters).concat(upperCasedCharacters);
// console.log(charOptions);

// var password = "";

// var passwordLength = (parseInt(prompt("Please input the password character length you want (8-128)")));


// for (let i = 0; i <= passwordLength; i++) {
//   var randomNum = Math.floor(Math.random() * charOptions.length);
//   password += charOptions.slice(randomNum, randomNum + 1);
// }

// console.log(password);


// STEP --  Add event listener to generate button
// generateBtn.addEventListener('click', writePassword);