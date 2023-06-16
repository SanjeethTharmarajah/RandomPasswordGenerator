// Assign arrays for upper case alphabets
var upperCaseAlphabets = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z"
];

// Assign arrays for lower case alphabets
var lowerCaseAlphabets = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];

// Assign arrays for numbers
var numbers = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0"
];

// Assign arrays for special characters
var specialCharacters = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "&"
];

//default global variables
var passwordLength = "";
var upperCase = "";
var lowerCase = "";
var specialChar = "";
var numbersChar = "";
var finalPassword="";

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
  
}
function generatePassword(){
  showPasswordLengthBox();
  document.getElementById("msgbox").style.display="block";
  return finalPassword;
}
// custom prompt and confirm boxes inner html
function showPasswordLengthBox(){
  document.getElementById("msgbox").innerHTML = '<center>Enter length of password <br> (Enter between 8 and 128) <br><br> <input id="passlength" type="text" style="z-index:9999;"> <br><br> <button onclick="setPasswordLength()">OK</button> || <button onclick="cancelpasslength()">CANCEL</button><center>';
}

function showUpperCaseBox(){
  document.getElementById("msgbox").innerHTML = '<center>Do you want to use Upper Case Alphabets ? <br><br> <button onclick="setUpperCase()">YES</button> || <button onclick="cancelUpperCase()">NO</button><center>';
}

function showLowerCaseBox(){
  document.getElementById("msgbox").innerHTML = '<center>Do you want to use <font color="pink">Lower Case Alphabets </font> ? <br><br> <button onclick="setLowerCase()">YES</button> || <button onclick="cancelLowerCase()">NO</button><center>';
}

function showSpecialCharactersBox(){
  document.getElementById("msgbox").innerHTML = '<center>Do you want to use Special Characters ? <br><br> <button onclick="setSpecialCharacters()">YES</button> || <button onclick="cancelSpecialCharacters()">NO</button><center>';
}

function showNumbersBox(){
  document.getElementById("msgbox").innerHTML = '<center>Do you want to use Numbers ? <br><br> <button onclick="setNumbers()">YES</button> || <button onclick="cancelNumbers()">NO</button><center>';
}

// sets password length
function setPasswordLength(){
  var userInputLength = document.getElementById("passlength").value;
  if(isNaN(userInputLength)==false && userInputLength >= 8 && userInputLength<=128){
    passwordLength = userInputLength;
    showUpperCaseBox();
  }
  else {
    alert('Enter only numbers between 8 to 128 !');
  }
}
//if cancel is clicked on password length
function cancelpasslength(){
  alert('Password not generated ! \n You have clicked Cancel ! ');
  document.getElementById("msgbox").style.display="none";
  passwordLength = "";
  document.getElementById("password").value = '';
}
// sets conditions to password based on criteria
function setUpperCase(){
  upperCase = true;
  showLowerCaseBox();
}

function cancelUpperCase(){
  upperCase = false;
  showLowerCaseBox();
}

function setLowerCase(){
  lowerCase = true;
  showSpecialCharactersBox();
}

function cancelLowerCase(){
  lowerCase = false;
  showSpecialCharactersBox();
}

function setSpecialCharacters(){
  specialChar = true;
  showNumbersBox();
}

function cancelSpecialCharacters(){
  specialChar = false;
  showNumbersBox();
}
function setNumbers(){
  numbersChar = true;
  finalPassword = generatePass(upperCase, lowerCase, specialChar, numbersChar, passwordLength);
  document.getElementById("msgbox").style.display="none";
}

function cancelNumbers(){
  numbersChar = false;
  finalPassword = generatePass(upperCase, lowerCase, specialChar, numbersChar, passwordLength);
  document.getElementById("msgbox").style.display="none";
}
// generates random password based on criteria
function generatePass(upperCases1, lowerCases1, specialsChar1, numbers1, length1) {
  var totalChar = 0;
  var generatedPassword = "";
  for(var i=0; i<length1; i++){
      if(upperCases1===true && totalChar < length1){
          generatedPassword+= getRandomUpperCases();
          totalChar++;
      }
      if(lowerCases1===true && totalChar < length1){
          generatedPassword+= getRandomLowerCases();
          totalChar++;

      }
      if(specialsChar1===true && totalChar < length1){
          generatedPassword+= getRandomSpecialChar();
          totalChar++;
      }
      if(numbers1===true && totalChar < length1){
          generatedPassword+= getRandomNumbers();
          totalChar++;
      }
  }
  document.getElementById("password").value = generatedPassword;
  if(generatedPassword==""){
      alert("Password not generated ! \n You didn't select any criteria !");
  }
  return generatedPassword;
}
//randomly selects password characters
function getRandomUpperCases() {
  return upperCaseAlphabets[Math.floor(Math.random() * upperCaseAlphabets.length)];
}

function getRandomLowerCases() {
  return lowerCaseAlphabets[Math.floor(Math.random() * lowerCaseAlphabets.length)];
}

function getRandomSpecialChar() {
  return specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
}

function getRandomNumbers() {
  return numbers[Math.floor(Math.random() * numbers.length)];
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


