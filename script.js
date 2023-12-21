// Array of special characters to be included in password
var specialCharacters = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// Array of uppercase characters to be included in password
var upperCasedCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

var specialChars = specialCharacters.join('');
var numericChars = numericCharacters.join('');
var lowerCasedChars = lowerCasedCharacters.join('');
var upperCasedChars = upperCasedCharacters.join('');


/////////////////////////////////////////        MY ATTEMPT BELOW          ///////////////////////////////////////// 


// STEP 1  --  Function to prompt user for password character length

// Function expression
var pass = (parseInt(prompt("Please input the password character length you want (8-128)")));


var checkPass = function () {
  if (pass >= 8 && pass <= 128) {
    return pass;
  } else {
    confirm("Your password is not the correct number of characters - please try again");
    checkPass(); // Call function here to restart
  }
};

console.log(checkPass());
//   // check

// STEP 2 - Function to prompt user for password characters

var genChars = [];

var sChar = Boolean((confirm("Do you want SPECIAL characters? Click 'okay' for 'yes' or cancel for 'no'")));
var nChar = Boolean((confirm("Do you want NUMERIC characters? Click 'okay' for 'yes' or cancel for 'no'")));
var lChar = Boolean((confirm("Do you want LOWER-CASED characters? Click 'okay' for 'yes' or cancel for 'no'")));
var uChar = Boolean((confirm("Do you want UPPER-CASED characters? Click 'okay' for 'yes' or cancel for 'no'")));

if (sChar == true || nChar == true || lChar == true || uChar == true) {
  if (sChar == true) { genChars += specialChars }
  if (nChar == true) { genChars += numericChars }
  if (lChar == true) { genChars += lowerCasedChars }
  if (uChar == true) { genChars += upperCasedChars }
}

else {
  confirm("Please select at least one character type");
  checkPass(); // Call function here to restart
}

console.log(genChars);
//check

/// Step 3 - PRODUCE PASSWOORD BELOW

var passLength = checkPass();
var charOptions = genChars;
var password = "";


for (let i = 0; i <= passLength; i++) {
  var randomNum = Math.floor(Math.random() * charOptions.length);
  password += charOptions.slice(randomNum, randomNum + 1);
}


console.log(`Your password is ${password}`);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 

// // STEP -- Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   // HINT --> you're going to need to return something out of the generate password function
//   var passwordText = document.querySelector('#password');

//   passwordText.value = password;
// }

// // based on the loop above, whatever is returned from the generate password function goes into the "password" variable. The "password" variable is connected to the HTML id "password" using the query selector.

// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 

// // STEP --  Add event listener to generate button
// generateBtn.addEventListener('click', writePassword);

// // addEventListener --> tells the code to listen for an event