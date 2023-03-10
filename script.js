
// intial variables 
let generateBtn = document.querySelector("#generate");
let lowerCharacters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
let upperCharacters = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
'M', 'N', 'O', 'P', 'Q', 'R',  'S', 'T', 'U', 'V', 'W', 'X',
'Y', 'Z' ];
let numCharacters = ["1","2","3","4","5","6","7","8","9","0"];
let specialCharacters = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]","|","\",","<",",",">",".","?","/"];

// generate password and set the password text to it
function writePassword() {
  let password = generatePassword();
  console.log(password);
  if (password !== "") {
    let passwordText = document.querySelector("#password");
    passwordText.value = password;
  }
}

function generatePassword() {
  let passwordLength = prompt("Please enter length of password:");
  console.log(passwordLength);

// if passwords are less than 8 or more than 128, it will cancel and return
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Must be more than 8 characters or less than 128");
    return ""
  }

  // prompts/confirms to pop up and ask user to include characters
  let lowercase = confirm("Include lowercase characters?");
  console.log(lowercase);
  let uppercase = confirm("Include uppercase characters?");
  console.log(uppercase);
  let numeric = confirm("Include numeric characters?");
  console.log(numeric);
  let specialCharacter = confirm("Include special characters?");
  console.log(specialCharacter);

  // if none of the characters are selected, it will cancel and return
  if (lowercase == false && uppercase == false && numeric == false && specialCharacter == false) {
    alert("Must have at least one type of character.");
    return ""
  } 

  let password = "";

  // for loop with if statements for every array
  for ( i = 0; i < passwordLength; i++ ){
    let charArray = []
    if (lowercase) {
      let randomIndex = (Math.floor(Math.random() * (lowerCharacters.length)));
      let lowerChar = lowerCharacters[randomIndex]; 
      charArray.push(lowerChar)
    }
    
    if (uppercase) {
      let randomIndex = (Math.floor(Math.random() * (upperCharacters.length)));
      let upperChar = upperCharacters[randomIndex]; 
      charArray.push(upperChar)
    }

    if (numeric) {
      let randomIndex = (Math.floor(Math.random() * (numCharacters.length)));
      let numericChar = numCharacters[randomIndex]; 
      charArray.push(numericChar)
    }

    if (specialCharacter) {
      let randomIndex = (Math.floor(Math.random() * (specialCharacters.length)));
      let specialChar = specialCharacters[randomIndex]; 
      charArray.push(specialChar)
    }

    let randomCharIndex = (Math.floor(Math.random() * (charArray.length)));
    let randomChar = charArray[randomCharIndex];
    password = password + randomChar;
    console.log(password);
  }
  console.log(password);
  return password;
}
// Generate button on click
generateBtn.addEventListener("click", writePassword);
