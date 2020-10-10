// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Print password in box
function generatePassword() {
debugger;
  //*******************start length*************** */
  // prompt: choose length of password between 8-128 characters, default 8
  var chosenLength = window.prompt("How many characters would you like in your password?", "8");
  // convert string to number, base 10
  chosenLength = Number.parseInt(chosenLength, 10);

  // validate that chosenLength is a number
  if (Number.isNaN(chosenLength)) {
    alert("Your entry is not a number. Please enter a number between 8 and 128.");
    return "";
  }

  // validate that chosenLength is between 8 and 128
  if (chosenLength < 8 || chosenLength > 128) {
    window.alert("Please start over and enter a number between 8 and 128.");
    // stops and doesn't print anything in the box
    return "";
  }
  // label, # of characters, and variable type shows in log
  console.log('chosenLength', chosenLength, typeof chosenLength);

  // go to prompts to see what criteria they want
  decideCharTypes();
}
//*************end of length******************** */


// TODO: prompt: choose if there will be lowercase?, uppercase?, numeric? and/or special characters? 
//   valid values are arrays
// WHEN prompted for character types to include in the password
// THEN I choose lowercase, uppercase, numeric, and / or special characters

//************start lowercase******************* */
function decideCharTypes() {
  debugger;
  var yesLowercase = window.prompt("Would you like to include at least 1 lowercase letter? \nPlease type 'y' for yes or 'n' for no.");
  var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var lowercaseLetter = lowercase[Math.floor(Math.random() * lowercase.length)];

  // valid answers are 'yes' or 'no' and convert string to boolean
  if (yesLowercase === "y") {
    yesLowercase = true;
    passwordText = lowercaseLetter;
    //save 1st character of password
    passwordText[0] = passwordText;

    //return passwordText.value;
  } else if (yesLowercase === "n") {
    yesLowercase = false;
  } else {
    window.confirm("Invalid entry. Try again.");
    decideCharTypes();
  }      
  console.log('lowercaseLetter', lowercaseLetter, typeof lowercaseLetter);
  console.log('passwordText', passwordText, typeof passwordText);
  //************end lowercase********************* */

  //************start uppercase******************* */
  var yesUppercase = window.prompt("Would you like to include at least 1 uppercase letter? \nPlease type 'y' for yes or 'n' for no.");
  var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "p", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var uppercaseLetter = uppercase[Math.floor(Math.random() * uppercase.length)];

  // valid answers are 'yes' or 'no' and convert string to boolean
  if (yesUppercase === "y") {
    yesUppercase = true;
    if (yesLowercase = true) {
      passwordText = passwordText[0] + uppercaseLetter;
    } else {
      passwordText[0] = uppercaseLetter;
    }  
  } else if (yesUppercase === "n") {
    yesUppercase = false;
  } else {
    window.prompt("Invalid entry. Please start over.");
    decideCharTypes();
  }  

    console.log('yesUppercase', yesUppercase, typeof yesUppercase);
    console.log('passwordText', passwordText, typeof passwordText);
  //************end uppercase********************* */



}


// // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//go to randomUpLetter
//randomUpLetter();



