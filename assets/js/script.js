// Assignment Code
var generateBtn = document.querySelector("#generate");

const characters = [
  ["LOWERCASE", "abcdefghijklmnopqrstuvwxyz"],
  ["UPPERCASE", "ABCDEFGHIJKLMNOPQRSTUVWXYZ"],
  ["NUMERIC", "0123456789"],
  ["SPECIAL", "~`!@#$%^&*()_-+={[}]|\\:;\"'<,>.?/"]
];

function generatePassword() {

  let password = '';

  // Prompt for password length
  // Ask for the user desired password length until they cancel the prompt or provide a valid answer
  try {
    do {
      var passwordLength = askLength();
    } while (passwordLength === undefined);
  } catch (err) {
    alert(err);
    return;
  }

  // Prompt for password character types
  // For each type of character, ask for the user preference on including it until either they cancel the prompt or provide a valid answer
  try {
    var finalCharSelected = [];
    for (let i = 0; i < characters.length; i++) {
      do {
        var isCharAvailable = askPreference(characters[i][0]);
      } while (isCharAvailable === undefined);

      if (isCharAvailable) {
        finalCharSelected.push(characters[i])
      }
    }

    // Check if there are no character types selected
    if (finalCharSelected == false) throw 'No character types selected.  Passwords must use at least one character type.';
  } catch (err) {
    alert(err);
    return;
  }

  // Display a message indicating what the final selections were
  let charToDisplay = [];
  finalCharSelected.forEach(element => { charToDisplay.push(` ${element[0]}`) });
  alert(`*Final Selections*\nNumber of characters: ${passwordLength}\nCharacter types:${charToDisplay}`);

  // Generate Password
  for (let i = 0; i < passwordLength; i++) {

    // Randomly choose index of a row in the available characters array
    let charType = Math.floor(Math.random() * finalCharSelected.length);

    // Randomly choose index of a character in the string of available characters for the random row
    let characterNumber = Math.floor(Math.random() * (`${finalCharSelected[charType][1]}`).length);

    // Select the random character from the charType and characterNumber indexes
    let randomcharacter = (`${finalCharSelected[charType][1]}`).charAt(characterNumber);

    // Append each random character to the end of the password
    password = password.concat(randomcharacter);

  }

  return password;

}

// Ask for length of password
function askLength() {

  let response = prompt(`How many characters will the password be?\nChoose a value between 8 and 128:`);

  // If they click the Cancel Button, throw an error because they cancelled the prompt
  if (response === null) {
    throw "Password generation cancelled.";
  }

  // Confirm that it is a number
  if (isNaN(response)) {
    alert('That is not a number.  Please try again.')
  }

  // Confirm the number is a whole number
  else if (!(Number.isInteger(parseFloat(response)))) {
    console.log
    alert('That is not a whole number. Please try again.')
  }

  // If they provide a number outside the acceptable range or not a number, make them try again
  else if (!(response >= 8 && response <= 128)) {
    alert('That number is outside the bounds.  Please try again.')
  }

  // If they did it right, grab the number
  else {
    return response;
  }
}

// Asks if a certain character type should be considered and adds it to the available characters
function askPreference(charactertype) {

  let response = prompt(`Do you want ${charactertype} characters? (Y/N):`);

  // If they click the Cancel Button, throw an error because they cancelled the prompt
  if (response === null) {
    throw "Password generation cancelled.";
  }

  response = response.toLowerCase();

  // If they didn't answer with y or n
  if (response != 'y' && response != 'n') {
    alert('That is an invalid answer. Please try again.')
  }

  // If they answered with a valid response, then return true/false for yes/no respectively
  else {
    if (response === 'y') {
      return true;
    } else {
      return false;
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