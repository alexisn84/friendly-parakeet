// Assignment code here

//need 4 different Arrays with different options
var string = ["abcdefghijklmnopqrstuvwxyz"];
var upper = ['ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
var number =['0123456789'];
var special = ['!@#$%^&*()_+~`|}{[]\:;?><,./-='];


function generatePassword(){}

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
    window.prompt("Would you like numbers included in your password?")
    }

    else {
      window.alert("Please choose a differnt length, the one you have chosen is to small or to large.")
    }

  //write full confirm if they want #, upper/lower and special characters
  plan = function() {
    var pwOptionPrompt = window.prompt("Let's select a few options to help create your password.");

      switch(pwOptionPrompt) {
        
        case 1:
          string();
        
          case 2:
            number();

          case 3:
            special();

          case 4:
            upper();
      }
    }

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  };

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
