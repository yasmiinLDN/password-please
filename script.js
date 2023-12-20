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


///////////////////////////////////////////////////////////////////////////////// STARTER CODE BELOWv / ///////////////////////////////////////////////////////////////////////////////////

// Array of special characters to be included in password
var specialCharacters = [ '@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.'];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [ 'a', 'b','c', 'd','e','f','g', 'h','i', 'j','k','l','m', 'n','o','p', 'q','r', 's', 't', 'u', 'v','w', 'x','y','z'];

// Array of uppercase characters to be included in password
var upperCasedCharacters = ['A','B','C','D','E','F', 'G','H','I','J','K', 'L', 'M','N','O','P', 'Q', 'R', 'S', 'T','U','V','W','X','Y', 'Z'];

///////////////////////////////////////////////////////////////////////////////// 

const charOptions = [];
const generatedPassword = '';
// You can store the generatedPassword as a string and concat each character OR
// as an array and push each character, then join once you have enough characters


// STEP --  Function to prompt user for password options
function getPasswordOptions() {
  var passLength = (parseInt(prompt("Please input the password character length you want (8-128)")))
  if (passLength.length > 128 || passLength.length < 8) {
    alert("Your password is not the correct number of characters - please try again")
  }
  else getPasswordOptions()
  // Prompt for password length
  // At least 8 characters, no more than 128 characters
  // Conditional to check that the number that was entered is in range

  for(let i=0; i < passLength.length; i++) {

  }

  // (specialCharacters[i] || numericCharacters[i] || lowerCasedCharacters[i] || upperCasedCharacters[i])


    // VALIDATION -- should validate for each input and at least one character type should be selected. 
  // Prompts store data as strings, so need to parse into a number
  // If the user's input is out of range, either return out of the function or call the function again


  // Confirm which character sets to use
  // If the user answers false for all, either return out of the function or call the function again
  // Generate a random character for each selected character set
    // Either push selected character sets to a mega-array of all selected characters
  // OR you can keep the arrays separate and generate a random number to select the array and another to select the index

  // Once character sets are selected, move on to generating random characters
}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 

// STEP --  Function for getting a random element from an array
function getRandom(arr) {

// Need a variable to hold the password as it's being generated
// Need a variable to hold the index that's being generated

  // For loop that loops the number of times that matches the length the user chose --> loop over as many times as the user chose
  // Generate a random number
  // That number is the index for a character in the mega-array
  // So then, mega-array[generated-index] is the actual character
      // ADVICE --> The number itself is not the character, the number is the index. So you have to access the character that way.
  // Add that character to the password

// Once we finish the for loop, return the generated password

}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 

// STEP --  Function to generate password with user input
function generatePassword() {

}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 


// STEP --  Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// document = HTML document
// querySelector = you're asking it to look for (query) a specific selector --> selector you're looking for has an ID of "generate"


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 

// STEP -- Write password to the #password input
function writePassword() {
  var password = generatePassword();
  // HINT --> you're going to need to return something out of the generate password function
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// based on the loop above, whatever is returned from the generate password function goes into the "password" variable. The "password" variable is connected to the HTML id "password" using the query selector.

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 

// STEP --  Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

// addEventListener --> tells the code to listen for an event