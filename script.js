// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var passwordLength = prompt("Please enter length of password:");
  console.log(passwordLength);


  // comment out generatePassword if you dont want the loop to start over
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Must be more than 8 characters or less than 128");
    // generatePassword();
    return
  }
  var lowercase = confirm("Include lowercase characters?");
  console.log(lowercase);
  var uppercase = confirm("Include uppercase characters?");
  console.log(uppercase);
  var numeric = confirm("Include numeric characters?");
  console.log(numeric);
  var specialCharacter = confirm("Include special characters?");
  console.log(specialCharacter);

  if (lowercase == false && uppercase == false && numeric == false && specialCharacter == false) {
    alert("Must have at least one type of character.");
    return
  } 
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
