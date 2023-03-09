// Assignment Code
let generateBtn = document.querySelector("#generate");
let lowerCharacters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
let upperCharacters = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
'M', 'N', 'O', 'P', 'Q', 'R',  'S', 'T', 'U', 'V', 'W', 'X',
'Y', 'Z' ];
let numCharacters = ["1","2","3","4","5","6","7","8","9",];
let specialChar = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]","|","\",","<",",",">",".","?","/"];

// Write password to the #password input
function writePassword() {
  console.log("a" + "a" + "a")
  let password = generatePassword();

  if (password !== "") {
    let passwordText = document.querySelector("#password");
    passwordText.value = password;
  }
}

function generatePassword() {
  let passwordLength = prompt("Please enter length of password:");
  console.log(passwordLength);

  if (passwordLength < 8 || passwordLength > 128) {
    alert("Must be more than 8 characters or less than 128");
    return ""
  }

  let lowercase = confirm("Include lowercase characters?");
  console.log(lowercase);
  let uppercase = confirm("Include uppercase characters?");
  console.log(uppercase);
  let numeric = confirm("Include numeric characters?");
  console.log(numeric);
  let specialCharacter = confirm("Include special characters?");
  console.log(specialCharacter);

  if (lowercase == false && uppercase == false && numeric == false && specialCharacter == false) {
    alert("Must have at least one type of character.");
    return ""
  } 

  let password = "";
  for ( i = 0; i < passwordLength; i++ ){
    password = password + Math.random();
    console.log(password);
  }
  console.log(password);
  return password;

  // for loop here
}

// for loop to repeat process however many times needed, random logic to get random characters, concact to build array of random to use

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
