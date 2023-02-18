// Assignment Code
var generateBtn = document.querySelector("#generate");

const characters = {
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numeric: "0123456789",
  special: "~`!@#$%^&*()_-+={[}]|\\:;\"'<,>.?/",
};

function generatePassword() {
  var availableCharArray = [];
  let password = '';

  // Prompt for Password Character Types
  try {
    Object.keys(characters).forEach(key => askPreference(availableCharArray, key))
    console.log(availableCharArray);
    if (availableCharArray == '') throw 'No character types selected.  Password must use at least one character type.';
  } catch (err) {
    alert(err);
    return;
  }

  // Prompt for Password Length
  try {
    var passwordLength = askLength();
  } catch (err) {
    alert('Password generation cancelled.');
    return;
  }


  // Generate Password
  for (let i = 0; i < passwordLength; i++) {

    // Random row in the Available Characters Array to Pull From
    let charType = Math.floor(Math.random() * availableCharArray.length);

    // Random position in the string of Available Characters Array
    let characterNumber = Math.floor(Math.random() * availableCharArray[charType][0]);

    // Random character from the character string in row 'charType' at position 'characterNumber'
    let randomcharacter = (`${availableCharArray[charType][1]}`).charAt(characterNumber);

    // Password
    password = password.concat(randomcharacter);

  }

  return password;

}

// Ask for length of password
function askLength() {

  let response = prompt(`How many characters do you want?  It must be between 8 and 128 characters:`);

  // If they click the Cancel Button, throw an error because they cancelled the prompt
  if (response === null) {
    throw "Prompt Cancelled";
  }

  // If they provide a number outside the acceptable range or not a number, make them try again.
  if (!(response >= 8 && response <= 128)) {
    alert('Incorrect entry. Please try again.')
    askLength();
  }

  // If they did it right, grab that number.
  else {
    return response;
  }
}

// Asks if a certain character type should be considered and adds it to the available characters if yes.
function askPreference(availableChars, characterkey) {

  let response = prompt(`Do you want ${characterkey} characters? (Y/N):`);

  // If they click the Cancel Button, throw an error because they cancelled the prompt
  if (response === null) {
    throw "Password generation cancelled.";
  }

  response = response.toLowerCase();

  // If they didn't answer with y or n
  if (response != 'y' && response != 'n') {
    alert('Incorrect entry. Please try again.')
    askPreference(availableChars, characterkey)
  }

  // If they answered correctly, Check if it was a yes response and add it to the available characters array
  else {
    if (response === 'y') {
      availableChars.push([characters[characterkey].length, characters[characterkey]])
    }
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  if (password === undefined) {
    return;
  }
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);