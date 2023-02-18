// Assignment Code
var generateBtn = document.querySelector("#generate");

const characters = [
  ["lowercase", "abcdefghijklmnopqrstuvwxyz"],
  ["uppercase", "ABCDEFGHIJKLMNOPQRSTUVWXYZ"],
  ["numeric", "0123456789"],
  ["special", "~`!@#$%^&*()_-+={[}]|\\:;\"'<,>.?/"]
];

function generatePassword() {

  let password = '';

  // Prompt for password length
  // Try to complete the askLength until it is no longer undefined (meaning nothing returned).  The catch exits the loop if a null is defined (meaning Cancel is clicked)
  try {
    do {
      var passwordLength = askLength();
    } while (passwordLength === undefined);
  } catch (err) {
    alert(err);
    return;
  }

  // Prompt for password character types
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
    if (finalCharSelected == false) throw 'No character types selected.  Password must use at least one character type.';
  } catch (err) {
    alert(err);
    return;
  }

  // Display a message indicating what the final selections were
  let charToDisplay = [];
  finalCharSelected.forEach(element => { charToDisplay.push(` ${element[0]}`) });
  alert(`Final Selection:\nNumber of characters: ${passwordLength}\nCharacter Types:${charToDisplay}`);

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

  let response = prompt(`How many characters do you want?  It must be between 8 and 128 characters:`);

  // If they click the Cancel Button, throw an error because they cancelled the prompt
  if (response === null) {
    throw "Password generation cancelled.";
  }

  // If they provide a number outside the acceptable range or not a number, make them try again.
  if (!(response >= 8 && response <= 128)) {
    alert('Incorrect entry. Please try again.')
  }

  // If they did it right, grab that number.
  else {
    return response;
  }
}

// Asks if a certain character type should be considered and adds it to the available characters.
function askPreference(charactertype) {

  let response = prompt(`Do you want ${charactertype} characters? (Y/N):`);

  // If they click the Cancel Button, throw an error because they cancelled the prompt
  if (response === null) {
    throw "Password generation cancelled.";
  }

  response = response.toLowerCase();

  // If they didn't answer with y or n
  if (response != 'y' && response != 'n') {
    alert('Incorrect entry. Please try again.')
  }

  // If they answered correctly, Check if it was a yes response and add it to the available characters array
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