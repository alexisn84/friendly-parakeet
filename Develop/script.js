// Assignment code here

var string = "abcdefghijklmnopqrstuvwxyz" .split("");
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" .split("");
var number ="0123456789" .split("");
var special = "!@#$%^&*" .split("");
console.log(string);

var possPassword = [];

//give generatePassword function a parameter
function generatePassword(characters) { 
    
  //use math random function to select  posscharacters from array
  //var randomChars = possPassword;
    var result;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * randomChars.length));
    }
    
  console.log(result);

  //change text content to display variable values .hint.join( ) function
  
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Enable button
generateBtn.disabled = false;

// Write password to the #password input
function writePassword() {
  
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
      possPassword += number;
      console.log(possPassword);
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
      possPassword += string;
      console.log(possPassword);
    }

  var upperOption = window.confirm(
    "Would you like uppercase letters?");
    console.log(upperOption);

    if(upperOption) {
      possPassword += upper;
      console.log(possPassword);
    }

  var specialOption = window.confirm(
    "Would you like special characters?");
    console.log(specialOption);

    if (specialOption) {
      possPassword += special;
      console.log(possPassword);

      passwordText.value = password;
      var passwordText = document.querySelector("#password");   
      
      passwordText.value = password;
    }
    
  generatePassword(possPassword);
  console.log(possPassword);
  
  };

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
