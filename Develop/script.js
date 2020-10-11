// Assignment code here


//debugger;
// Write password to the #password input
//var password = generatePassword();
var passwordTextEL = document.querySelector("#password");

function writePassword() {

  // go to prompts to see what criteria they want
  generatePassword();

};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Print password in box
function generatePassword() {
//debugger;
  //************* warning box to reload ************ */
  var warningBox = window.confirm("If you do not see 'Your Secure Password' inside the dotted box, \nplease refresh your Internet browser window for best results.");
  //************ lowercase array ******************* */
  var yesLowercase = window.confirm("Would you like to include at least 1 lowercase letter? \nClick 'OK' for yes and 'Cancel' for no.");
  if (yesLowercase === false) {
    var arrLowercase = [];
  }
  else {
    var arrLowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  }
 
  //************ uppercase array ******************* */
  var yesUppercase = window.confirm("Would you like to include at least 1 uppercase letter? \nClick 'OK' for yes and 'Cancel' for no.");
  if (yesUppercase === false) {
    var arrUppercase = [];
  }
  else {
  var arrUppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  }
  //************ number array ******************* */
  var yesNumber = window.confirm("Would you like to include at least 1 number? \nClick 'OK' for yes and 'Cancel' for no.");
  if (yesNumber === false) {
    var arrLowercase = [];
  }
  else {
  var arrNumber = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  }
  //************ special array ******************* */
  var yesSpecial = window.confirm("Would you like to include any special characters? \nClick 'OK' for yes and 'Cancel' for no.");
  if (yesSpecial === false) {
    var arrSpecial = [];
  }
  else {
  var arrSpecial = ["~", "!", "#", "$", "%", "^", "&", "*", "+", "=", "-", "?"];
  }
  if (yesLowercase === false && yesUppercase === false && yesNumber === false && yesSpecial === false) {
    window.confirm("Please try again. You must choose at least 1 character type to include in the password.");
    generatePassword();
  }
  
  // debugger;
  //*******************start ask length*************** */
  // prompt: choose length of password between 8-128 characters, default 8
  var chosenLength = window.prompt("How many characters would you like in your password?", "8");
  // convert string to number, base 10
  chosenLength = Number.parseInt(chosenLength, 10);

  // validate that chosenLength is a number
  if (Number.isNaN(chosenLength)) {
    alert("Your entry is not a number. Please start over and enter a number between 8 and 128.");
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
  //*************end of ask length******************** */
//debugger;
  // initialize empty password string and characterset array
  password = "";
  passwordText = "";
  var passwordArrAll = [];

  //************start collect all possible characters to include in password***** */
  // if user wants lowercase, include it
  if (yesLowercase === true) {
    passwordArrAll = passwordArrAll.concat(arrLowercase);
    var lowerIndex = Math.floor(Math.random() * arrLowercase.length);
    passwordText = passwordText + arrLowercase[lowerIndex];
    console.log('passwordArrAll', passwordArrAll, typeof passwordArrAll);
  }

  // if user wants uppercase, include and concat it
  if (yesUppercase === true) {
    passwordArrAll = passwordArrAll.concat(arrUppercase);
    var upperIndex = Math.floor(Math.random() * arrUppercase.length);
    passwordText = passwordText + arrUppercase[upperIndex];
    console.log('passwordArrAll', passwordArrAll, typeof passwordArrAll);
  }

  // if user wants a number, include and concat it
  if (yesNumber === true) {
    passwordArrAll = passwordArrAll.concat(arrNumber);
    var numberIndex = Math.floor(Math.random() * arrNumber.length);
    passwordText = passwordText + arrNumber[numberIndex];
    console.log('passwordArrAll', passwordArrAll, typeof passwordArrAll);
  }

  // if user wants a special character, include and concat it
  if (yesSpecial === true) {
    passwordArrAll = passwordArrAll.concat(arrSpecial);
    var specialIndex = Math.floor(Math.random() * arrSpecial.length);
    passwordText = passwordText + arrSpecial[specialIndex];
    console.log('passwordArrAll', passwordArrAll, typeof passwordArrAll);
  }
  //************end collect all possible characters to include in password***** */
  console.log('chosenLength', chosenLength, typeof chosenLength);

  // loop to get the right number of characters to match the desired length
  for (var i = (password.length + 4); i <= (chosenLength - 1); i = i + 1) {
    var passwordIndex = Math.floor(Math.random() * passwordArrAll.length);
    passwordText = passwordText + passwordArrAll[passwordIndex];

  }
  console.log('passwordText', passwordText, typeof passwordText);
  passwordTextEL.value = passwordText;
};

generateBtn.addEventListener("click", writePassword);
