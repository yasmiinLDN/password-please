// Array of special characters to be included in password
var specialCharacters = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// Array of uppercase characters to be included in password
var upperCasedCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];


////////////////////////////////////////////////////////        MY ATTEMPT BELOW          //////////////////////////////////////////////////////// 

// function getPasswordOptions() {

//   var genChars = [];
//   var password = [];

//   // ask all the right questions
//   var passLength = (parseInt(prompt("Please input the password character length you want (8 - 128)")));

//   // VALIDATION (I think that's what this is called)
//   if (passLength.length > 7 && passLength.length < 129) {

//     // CHECKS

//     //prompts to select character type(s)
//     var sChar = Boolean((confirm("do you want special characters? Click 'okay' to confirm")));
//     var nChar = Boolean((confirm("do you want numeric characters? Click 'okay' to confirm")));
//     var lChar = Boolean((confirm("do you want lower-cased characters? Click 'okay' to confirm")));
//     var uChar = Boolean((confirm("do you want upper-cased characters? Click 'okay' to confirm")));


//     if (sChar == true || nChar == true || lChar == true || uChar == true) {
//       if (sChar == true) { genChars += specialCharacters }
//       if (nChar == true) { genChars += numericCharacters }
//       if (lChar == true) { genChars += lowerCasedCharacters }
//       if (uChar == true) { genChars += upperCasedCharacters }

//       console.log(genChars)
//       // CHECKS
//     }

//     else {
//       alert("Please select at least one character type")
//     }
//   }
//   else {
//     alert("Please enter a value between 8 and 128")
//   }
//   // END VALIDATION

//   // for (let i = 0; i <= passLength.length; i++) {



//   /// generate the password 
//   for (let i = 0; i <= genChars.length; i++) {
//     var characters = genChars;
//     var charsLength = characters.length;

//     var randomNum = Math.floor(Math.random() * charsLength);
//     password += characters.slice(randomNum, randomNum + 1);
//     return password;
//   }


//   // }
// }



// // console.log(getPasswordOptions());
// console.log(getPasswordOptions());
// console.log(`Your password is ${password}`);



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// var generateCharacters= [];

// function getPasswordOptions() {

//   // ask all the right questions
//   var passLength = (parseInt(prompt("Please input the password character length you want (8-128)")));

// // for (let i = 0; i <= passLength.length; i++) {
//   if (passLength.length >= 8 && passLength.length <= 128) {
//     // CHECKS

//         //prompts to select character type(s)
//     var sChar = Boolean((prompt("do you want special characters? Click 'okay' to confirm")));
//     var nChar = Boolean((prompt("do you want numeric characters? Click 'okay' to confirm")));
//     var lChar = Boolean((prompt("do you want lower-cased characters? Click 'okay' to confirm")));
//     var uChar = Boolean((prompt("do you want upper-cased characters? Click 'okay' to confirm")));


//     if (sChar === true || nChar === true || lChar === true || uChar === true) {
//       if (sChar === true) { return generateCharacters+= specialCharacters }
//       if (nChar === true) { return generateCharacters+= numericCharacters }
//       if (lChar === true) { return generateCharacters+= lowerCasedCharacters }
//       if (uChar === true) { return generateCharacters+= upperCasedCharacters }
//     }
//     // CHECKS
//     else {
//       alert("Please select at least one character type");
//     }
//   }
//   else {
//     alert("Please enter a value between 8 and 128");
//   }
// // }
// }

// console.log(generateCharacters);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// STEP 1  --  Function to prompt user for password character length

// const pass = (parseInt(prompt("Please input the password character length you want (8-128)")));

// // Function expression
// function checkPass() {
//   if (pass >= 8 && pass <= 128) {
//     return pass;
//   } else {
//     confirm("Your password is not the correct number of characters - please try again");
//     checkPass(); // Call function here
//   }
// }

// console.log(checkPass());

// STEP 2 - Function to prompt user for password characters

// var genChars = [];

// var sChar = Boolean((confirm("do you want special characters? Click 'okay' to confirm")));
// var nChar = Boolean((confirm("do you want numeric characters? Click 'okay' to confirm")));
// var lChar = Boolean((confirm("do you want lower-cased characters? Click 'okay' to confirm")));
// var uChar = Boolean((confirm("do you want upper-cased characters? Click 'okay' to confirm")));

//   if (sChar == true || nChar == true || lChar == true || uChar == true) {
//     if (sChar == true) {genChars += specialCharacters }
//     if (nChar == true) {genChars += numericCharacters }
//     if (lChar == true) {genChars += lowerCasedCharacters }
//     if (uChar == true) {genChars += upperCasedCharacters }
//   }
//   // CHECKS
//   else {
//     alert("Please select at least one character type");
//   }  
  
//   console.log(genChars);


  /// BELOW GERNERATES PASSWORD WITHOUT PROMPTING FOR CHARACTER TYPE OR ANYTHING - CONCATENATED THE CHARACTERS ABOVE WITHOUT PROMPTING -- WILL REPLACE 'passLength' AND  'charOptions' WITH ABOVE

// var passLength = (parseInt(prompt("Please input the password character length you want (8-128)")));


// var charOptions = specialCharacters.concat(numericCharacters).concat(lowerCasedCharacters).concat(upperCasedCharacters);

// var password = "";




// for (let i = 0; i < passLength; i++) {
//   var randomNum = Math.floor(Math.random() * charOptions.length);
//   password += charOptions.slice(randomNum, randomNum + 1);
// }


// console.log(`Your password is ${password}`);

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