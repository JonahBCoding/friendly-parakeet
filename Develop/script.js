// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
debugger;
// Print password in box
function generatePassword() {
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
    window.alert("Please enter a number between 8 and 128.");
    // stops and doesn't print anything in the box
    return "";
  }
  // label, # of characters, and variable type shows in log
  console.log('chosenLength', chosenLength, typeof chosenLength);

  return 0;
  //  convert string to a number
}
//*************end of length******************** */

//************start lowercase******************* */
// TODO: prompt: choose if there will be lowercase?, uppercase?, numeric? and/or special characters? 
// valid values are arrays
// WHEN prompted for character types to include in the password
// THEN I choose lowercase, uppercase, numeric, and / or special characters
debugger;
function randomLetter() {
  var yesLowercase = window.prompt("Would you like to include at least 1 lowercase letter?");
  var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var lowercaseLetter = lowercase[Math.floor(Math.random() * lowercase.length)];

  // valid answers are 'yes' or 'no' and convert string to boolean
  if (yesLowercase === "yes") {
    yesLowercase = true;
    return lowercaseLetter;
    //return passwordText.value;
  } else if (yesLowercase === "no") {
    yesLowercase = false;
  } else {
    alert("Please enter 'yes' or 'no'.");
    return "";

    console.log('yesLowercase', yesLowercase, typeof yesLowercase);
  }

  //**add array for adding in lowercase letters **/

  //************end lowercase********************* */

  //************start uppercase******************* */
  // TODO: prompt: choose if there will be lowercase?, uppercase?, numeric? and/or special characters? 
  // valid values are arrays
  // WHEN prompted for character types to include in the password
  // THEN I choose lowercase, uppercase, numeric, and / or special characters
  var yesUppercase = window.prompt("Would you like to include at least 1 uppercase letter?");
  // valid answers are 'yes' or 'no' and convert string to boolean
  if (yesUppercase === "yes") {
    yesUppercase = true;
  } else if (yesUppercase === "no") {
    yesUppercase = false;
  } else {
    alert("Please enter 'yes' or 'no'.");
    return "";
  }
  console.log('yesUppercase', yesUppercase, typeof yesUppercase);

  //**add array for adding in uppercase letters **/

  //************end uppercase********************* */

  //************start numeric******************* */
  // TODO: prompt: choose if there will be lowercase?, uppercase?, numeric? and/or special characters? 
  // valid values are arrays
  // WHEN prompted for character types to include in the password
  // THEN I choose lowercase, uppercase, numeric, and / or special characters
  var yesNumeric = window.prompt("Would you like to include at least 1 number?");
  // valid answers are 'yes' or 'no' and convert string to boolean
  if (yesNumeric === "yes") {
    yesNumeric = true;
  } else if (yesNumeric === "no") {
    yesNumeric = false;
  } else {
    alert("Please enter 'yes' or 'no'.");
    return "";
  }
  console.log('yesNumeric', yesNumeric, typeof yesNumeric);

  //**add array for adding in numbers **/

  //************end numeric********************* */

  //************start special characters******************* */
  // TODO: prompt: choose if there will be lowercase?, uppercase?, numeric? and/or special characters? 
  // valid values are arrays
  // WHEN prompted for character types to include in the password
  // THEN I choose lowercase, uppercase, numeric, and / or special characters


  // ***NOT CHANGING YET BECAUSE NOT SURE HOW
  // var yesNumeric = window.prompt("Would you like to include at least 1 number?");
  // // valid answers are 'yes' or 'no' and convert string to boolean
  // if (yesNumeric === "yes") {
  //   yesNumeric = true;
  // } else if (yesNumeric === "no") {
  //   yesNumeric = false;
  // } else {
  //   alert("Please enter 'yes' or 'no'.");
  //   return "";
  // }
  // console.log('yesNumeric', yesNumeric, typeof yesNumeric);

  //**add array?? for adding in for special characters **/

  //************end special characters********************* */

  var allNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  var Uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "p", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var allNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var specialChars;




  //generate a number:
  //  chosenLength:  8 -> 45984938, 128 -> (128 digit number)
  //    yesLowercase: array[i] where i = every lowercase letter
  //    yesUppercase: array[i] where i = every uppercase letter
  //    yesNumeric: array[i] where i = any digit 0-9
  //    yesSpecialCharacter??: anything else

  //  display the output in the box

  // ***NOT SURE IF THIS WORKS******
  // debugger;
  // var passwordCharacter = "";  // each character in the password
  // var showChar = password[i];
  // for (var i = 0; i < showChar; i = i + 1) {
  //   var allIndex = Math.floor(Math.random() * allNumbers.length);
  //   showChar = showChar + allNumbers[allIndex];


  // }




  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);

  return 0;
}