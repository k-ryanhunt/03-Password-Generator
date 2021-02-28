// Assignment Code
var generateBtn = document.querySelector("#generate");
var iLength = 
// Write password to the #password input
function writePassword() {

  var pLength = window.prompt("How many characters would you like your password to be?");
  if (!pLength) { return; }
  while (pLength < 8 || pLength > 128) {
    pLength = prompt("Length must be 8-128 characters. How many characters would you like your password to be?");
  }

  var pUppercase = confirm("Would you like to use uppercase letters?");
  var pLowercase = confirm("Would you like to use lowercase letters?");
  var pNumbers = confirm("Would you like to use numbers?");
  var pSymbols = confirm("Would you like to use special characters?");
  while (!(pUppercase || pLowercase || pNumbers || pSymbols)) {
    alert("You must have at least one character type!");
    pUppercase = confirm("Would you like to use uppercase letters?");
    pLowercase = confirm("Would you like to use lowercase letters?");
    pNumbers = confirm("Would you like to use numbers?");
    pSymbols = confirm("Would you like to use special characters?");
  }
  function getRandomLower() {
    return rando("qwertyuiopasdfghjklzxcvbnm")
  }
  
  function getRandomUpper() {
    return rando("QWERTYUIOPASDFGHJKLZXCVBNM");
  }
  
  function getRandomNumber() {
    return rando(9);
  }
  
  function getRandomSymbol() {
    return rando('!@#$%^&*(){}[]=<>/,.');
  }

  // need to tell the computer what to do when password is ready
  var password = generatePassword = Math.floor(Math.random() * options.length);
  var computerChoice = options[index];
  var passwordText = document.querySelector("#password")
  passwordText.value = password;

}

// Add event listener to generate button
if (generateBtn.addEventListener("click", writePassword)) {
  writePassword();
}
