// Assignment code here

var string = "abcdefghijklmnopqrstuvwxyz".split("");
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var number ="0123456789".split("");
var special = "!@#$%^&*".split("");


//give generatePassword function a parameter
function generatePassword(characters) { 

  var password = []

  //write variable for length
  var length = window.prompt(
    "How long would you like your password to be?");
    console.log(length);

  //write if condition to check if pw lenth if less than 8 or greateer than 128
  if (length >= 8 && length <=128 ) {
    var numberOption = window.confirm("Would you like numbers included in your password?");
    console.log(numberOption);
    }

    if(numberOption) {
      password = password.concat(number);
      console.log(password);
    }

    else {
      window.alert("Please choose a different length, the one you have chosen is to small or to large.")
      writePassword();
    }

  //write full confirm if they want #, upper/lower and special characters
  var stringOption = window.confirm(
    "Would you like lower case letters?");
    console.log(stringOption);

    if(stringOption) {
      password = password.concat(string);
      console.log(password);
    }

  var upperOption = window.confirm(
    "Would you like uppercase letters?");
    console.log(upperOption);

    if(upperOption) {
      password = password.concat(upper);
      console.log(password);
    }

  var specialOption = window.confirm(
    "Would you like special characters?");
    console.log(specialOption);

    if (specialOption) {
      password = password.concat(special);
      console.log(password);
    }
  
    var result = "";
    //math random function needs to be broken up
    for ( var i = 0; i < length; i++ ) {
      result += password[Math.floor(Math.random() * password.length)];
      console.log(result);
  }
    
  return result;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Enable button
generateBtn.disabled = false;

// Write password to the #password input
function writePassword() {
    var password = generatePassword(); 

  var passwordText = document.querySelector("#password");   
      
  passwordText.value = password;
  
  
  
  };

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
