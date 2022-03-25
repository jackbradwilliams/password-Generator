// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var digits = "0123456789";
var specialChars = "!$%&'()*+,-./:;<=>?@[]^_`{|}~";

// Write password to the #password input
function writePassword() {
	var password = generatePassword();
	var passwordText = document.querySelector("#password");

	passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
	var passLength = getPassLength();
	var selectedChars = userPreferences();

	var allowedTypes = [];
	if (selectedChars.addLower) {allowedTypes.push(lowercase);}
  if (selectedChars.addUpper) {allowedTypes.push(uppercase);}
  if (selectedChars.addNumber) {allowedTypes.push(digits);}
  if (selectedChars.addSpecial) {allowedTypes.push(specialChars);}

  var finalpassword = "";
	for (var i = 0; i < passLength; i++) {
    var rand1 = Math.floor(Math.random()*allowedTypes.length)
    var value1 = allowedTypes[rand1];
    var rand2 = Math.floor(Math.random()*value1.length);
    var value2 = value1[rand2];
    finalpassword+=value2;
  }
  
  
	return finalpassword;
}

function userPreferences() {
	var addLower = confirm("Include lowercase characters?");
	var addUpper = confirm("Include uppercase characters?");
	var addNumber = confirm("Include numbers?");
	var addSpecial = confirm("Include special characters?");
	var selectedChars = {
		addLower: addLower,
		addUpper: addUpper,
		addNumber: addNumber,
		addSpecial: addSpecial,
	};

	if (
		selectedChars.addLower ||
		selectedChars.addUpper ||
		selectedChars.addNumber ||
		selectedChars.addSpecial
	) {
		return selectedChars;
	} else {
		alert(
			'No character types were selected. Please select "OK" on at least one character type.'
		);
		return userPreferences();
	}
} // userPreferences()

function getPassLength() {
	var message1 = prompt("Enter password length (minimum: 8 & maximum: 128)");
	if (Number(message1) >= 8 && Number(message1) <= 128) {
		return Number(message1);
	}

	var message2 = alert("Invalid input. Please try again.");
	return getPassLength();
} // getPassLength()
