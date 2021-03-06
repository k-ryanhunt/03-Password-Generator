var Upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",];
var Lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
var Num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var Sym = ["!", "@", "#", "$", "%", "&", "*"];
var confirmLength = "";
var confirmSymbols;
var confirmNumber;
var confirmUppercase;
var confirmLowercase;

//This section allows the user to make choices through prompts. If they do not select an option, it restarts the function.
function generatePasswordChoice() {
  var length = window.prompt("Choose a length between 8 and 128 characters.");
  var uppercase = confirm("Would you like to include uppercase letters?");
  var lowercase = confirm("Would you like to include lowercase letters?");
  var Numbers = confirm("Would you like to include numbers?");
  var Symbols = confirm("Would you like to include special characters?");
  if (uppercase === false && lowercase === false && Numbers === false && Symbols === false) {
    alert("You must select at least one option.")
    generatePasswordChoice();
  }
    var passObj = {
      length:length,
      uppercase:uppercase,
      lowercase:lowercase,
      Numbers:Numbers,
      Symbols:Symbols
    }
    return passObj
  }

  //This section takes the array of elements selected to make up what will be used to generate the password.
  function randomChoice(array) {
    var randomSelect = Math.floor(Math.random()*array.length);
    var randomElement = array[randomSelect]
    return randomElement
  }

  //This section is concatenating all of the choices and options to create the password.
  function generatePassword() {
    var options = generatePasswordChoice();
    var result = [];
    var posChar = [];
    var gChar = [];
    if (options.uppercase) {
      posChar = posChar.concat(Upper);
      gChar.push(randomChoice(Upper));
    }
    if (options.lowercase) {
      posChar = posChar.concat(Lower);
      gChar.push(randomChoice(Lower));
    }
    if (options.Numbers) {
      posChar = posChar.concat(Num);
      gChar.push(randomChoice(Num));
    }
    if (options.Symbols) {
      posChar = posChar.concat(Sym);
      gChar.push(randomChoice(Sym));
    }
    for (var i=0; i < options.length; i++) {
      var passwordChar = randomChoice(posChar)
      result.push(passwordChar)
    }
    for (var i=0; i < gChar.length; i++) {
      result[i] = gChar[i]
    }
    return result.join('')
  }

  var generateBtn = document.querySelector("#generate");

  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  }

  generateBtn.addEventListener("click", writePassword)