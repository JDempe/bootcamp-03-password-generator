# CBC Week 03 Challenge: Password Generator
## Description

This project is the third challenge from the coding bootcamp from UC Berkeley.  The challenge was to create a password generator with the following requirements:

- Password must be between 8-128 characters and the user will be asked to provide it.
- Password must be able to have lowercase, uppercase, numeric, and special characters and the user will be asked which to include.
- At least one character type has to be selected (exit condition)
- Once everything is selected, password must output to the textbox.
  
The major difficulty in this project is trying to handle all edge cases.  Because I chose to not use the Okay and Cancel buttons as Yes and No, there is a much higher chance the user will put in an unanticipated response.  However, the benefit gained is that the Cancel button can be used to exit the process, whereas if Cancel was a resposne there is no way to end the prompt early.

## Installation

There is no installation process for this project.  It is already deployed at:

https://jdempe.github.io/bootcamp-03-password-generator/

## Usage

To begin the generation process, the user presses the Generate Password button.  A prompt will come up asking for the length of the password.  If the user presses okay with an invalid entry (blank, decimals, out of bounds, etc.) an alert will pop up asking the user to try again.  If the user presses the cancel button, the process will end with no password generated.  Similarly, after the length is selected, the user will be asked yes or no to each of the four character types (loweercase, uppercase, numeric, special).  A 'Y' answer will include those characters, and a 'N' answer will exclude them.  Clicking cancel on any of the prompts will end the generation process with no output.  Finally, when all options are selected the user will be given a summary of the selections and then a password will be generated.

## Mock Up

The mock up below was provided in the bootcamp homework materials.  We were to use the existing HTML/CSS and and only add the Javascript, so the final product looks the same as the mockup, with added functionality in the background.

![password generator screenshot](./assets/images/03-javascript-homework-demo.png)

## Credits

### Resources
The below resources contributed to the decisions made on how to most effectively refactor the webpage.

- [W3 Schools](https://www.w3schools.com/js/default.asp) provides great tutorials on many Javascript methods.

## License

Refer to the LICENSE in the repository.

## How to Contribute

Contribute at https://github.com/JDempe/bootcamp-03-password-generator