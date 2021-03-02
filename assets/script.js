var generateBtn = document.querySelector("#generate");
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",];
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
var Numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var Symbols = ["!", "@", "#", "$", "%", "&", "*"];
var confirmLength = "";
var confirmSymbols;
var confirmNumber;
var confirmUppercase;
var confirmLowercase;
var choices;
var enter;


if (generateBtn.addEventListener("click", writePassword)) {
  writePassword();
}


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}


function generatePassword() {
  var Length = window.prompt("How many characters would you like your password to be?");
  if (!Length) { return; }
  while (Length < 8 || Length > 128) {
    Length = prompt("Length must be 8-128 characters. How many characters would you like your password to be?");
  }
  var uppercase = confirm("Would you like to use uppercase letters?");
  var lowercase = confirm("Would you like to use lowercase letters?");
  var Numbers = confirm("Would you like to use numbers?");
  var Symbols = confirm("Would you like to use special characters?");
  while (!(uppercase || lowercase || Numbers || Symbols)) {
    alert("You must have at least one character type!");
    uppercase = confirm("Would you like to use uppercase letters?");
    lowercase = confirm("Would you like to use lowercase letters?");
    Numbers = confirm("Would you like to use numbers?");
    Symbols = confirm("Would you like to use special characters?");
  }
  if (confirmSymbols && confirmNumber && confirmUppercase && confirmLowercase) {
    choices = character.concat(number, alpha, alpha2);
  }
  else if (confirmSymbols && confirmNumber && confirmUppercase) {
    choices = character.concat(number, alpha2);
  }
  else if (confirmSymbols && confirmNumber && confirmLowercase) {
    choices = character.concat(number, alpha);
  }
  else if (confirmSymbols && confirmLowercase && confirmUppercase) {
    choices = character.concat(alpha, alpha2);
  }
  else if (confirmNumber && confirmLowercase && confirmUppercase) {
    choices = number.concat(alpha, alpha2);
  }
  else if (confirmSymbols && confirmNumber) {
    choices = character.concat(number);
  }
  else if (confirmSymbols && confirmLowercase) {
    choices = character.concat(alpha);
  }
  else if (confirmSymbols && confirmUppercase) {
    choices = character.concat(alpha2);
  }
  else if (confirmLowercase && confirmNumber) {
    choices = alpha.concat(number);
  }
  else if (confirmLowercase && confirmUppercase) {
    choices = alpha.concat(alpha2);
  }
  else if (confirmNumber && confirmUppercase) {
    choices = number.concat(alpha2);
  }
  else if (confirmSymbols) {
    choices = character;
  }
  else if (confirmNumber) {
    choices = number;
  }
  else if (confirmLowercase) {
    choices = alpha;
  }


  for (var i = 0; i < enter; i++) {
    var password = choices[Math.floor(Math.random() * choices.length)];
    password.push(pickChoices);
  }}