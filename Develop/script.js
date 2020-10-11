//debugger;
var passwordTextEL = document.querySelector("#password"); // element that gets printed in the text box

function writePassword() {
  // go to prompts to see what criteria they want
  generatePassword();
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Print password in box
function generatePassword() {

  // ASK SET OF QUESTIONS FOR PASSWORD CRITERIA
  //************ lowercase array ******************* */
  var yesLowercase = window.confirm("Would you like to include at least 1 lowercase letter? \nClick 'OK' for yes and 'Cancel' for no.");
  // keep array empty if user says they don't want any lowercase letters so they don't get added in later
  if (yesLowercase === false) {
    var arrLowercase = [];
  }
  else {
    var arrLowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  };
 
  //************ uppercase array ******************* */
  var yesUppercase = window.confirm("Would you like to include at least 1 uppercase letter? \nClick 'OK' for yes and 'Cancel' for no.");
  if (yesUppercase === false) {
    var arrUppercase = [];
  }
  else {
    var arrUppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  };

  //************ number array ******************* */
  var yesNumber = window.confirm("Would you like to include at least 1 number? \nClick 'OK' for yes and 'Cancel' for no.");
  if (yesNumber === false) {
    var arrNumber = [];
  }
  else {
    var arrNumber = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  };

  //************ special array ******************* */
  var yesSpecial = window.confirm("Would you like to include any special characters? \nClick 'OK' for yes and 'Cancel' for no.");
  if (yesSpecial === false) {
    var arrSpecial = [];
  }
  else {
    var arrSpecial = ["~", "!", "#", "$", "%", "^", "&", "*", "+", "=", "-", "?"];
  };

  //************ require user to choose at least one criteria for the password **********/
  if (yesLowercase === false && yesUppercase === false && yesNumber === false && yesSpecial === false) {
    window.confirm("Please try again. You must choose at least 1 character type to include in the password.");
    generatePassword();
    return;
  }
  
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

  // initialize empty password string and characterset array
  password = "";
  passwordText = ""; // the assembled string password that will get passed to passwordTextEL
  var passwordArrAll = [];  // total criteria of the password
  var extraIndex = [];

  //************start collect all possible characters to include in password***** */
  // if user wants lowercase, include it
  if (yesLowercase === true) {
    passwordArrAll = passwordArrAll.concat(arrLowercase); // add all lowercase letters to total criteria
    var lowerIndex = Math.floor(Math.random() * arrLowercase.length); // find a random lowercase letter
    passwordText = passwordText + arrLowercase[lowerIndex]; // make the random lowercase letter part of output
    console.log('passwordArrAll', passwordArrAll, typeof passwordArrAll); // verify that all lowercase letters have been added
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
  
  // loop to get to 4 characters in the first 4 slots of the password
  for (var x = passwordText.length; x < 4; x = x + 1) {
    var firstFourIndex = Math.floor(Math.random() * passwordArrAll.length);
    passwordText = passwordText + passwordArrAll[firstFourIndex];
  }
  //************end collect all possible characters to include in password***** */

  // loop to get the right number of characters to match the desired length
  for (var i = (password.length + 4); i <= (chosenLength - 1); i = i + 1) {
    var passwordIndex = Math.floor(Math.random() * passwordArrAll.length);
    passwordText = passwordText + passwordArrAll[passwordIndex];
  }
  // confirm the passwordText is correct format and length
  console.log('passwordText', passwordText, typeof passwordText);

  // display the assembled password to the text box
  passwordTextEL.value = passwordText;

};  


// call the function to invoke button click
generateBtn.addEventListener("click", writePassword);
