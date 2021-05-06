// Assignment code here
var passChar = {
 lowerCase: ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'],
 upperCase: ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'],
 sym:['!','@','#','$','%','^','&','*','(',')'],
 num:['1','2','3','4','5','6','7','8','9'],

}




var generatePassword= function() {
  
   var userInput=prompt("how many characters between 8 through 128?");
   userInput = valPass(userInput);
  if (userInput >= 8 && userInput <= 128) {
    var isLower= confirm("do you want lower case letters?");
    var isUpper= confirm("do you want upper case letters?");
    var isSym= confirm("do you want symbols?");
    var isNum= confirm("do you want numbers?");

    

  } 
  else {
   alert 
  }
  
}



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
