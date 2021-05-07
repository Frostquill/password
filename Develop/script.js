// Assignment code here
var userInput = "";
var lowerCase = [
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
    "z",
];
var upperCase = [
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
    "Z",
];
var sym = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+"];
var num = "0123456789";
var mtArr = [];
var passArr=[];

var generatePassword = function () {
    userInput = prompt("how many characters between 8 through 128?");
    if (userInput >= 8 && userInput <= 128) {
        alert("please choose the following:");
        var spec = charSpec();
    } else {
        alert("input proper number!");
        generatePassword();
    }
    return spec;
};

var charSpec = function () {
    
    var isLower = confirm("do you want lower case letters?");
    var isUpper = confirm("do you want upper case letters?");
    var isSym = confirm("do you want symbols?");
    var isNum = confirm("do you want numbers?");

    if (isLower || isUpper || isSym || isNum) {
        if (isLower) {
            for (i = 0; i < lowerCase.length; i++)
            mtArr.push(lowerCase[i]);
        }

        if (isUpper) {
            for (i = 0; i < upperCase.length; i++)
            mtArr.push(upperCase[i]);
        }

        if (isSym) {
            for (i = 0; i < sym.length; i++)
            mtArr.push(sym[i]);
        }

        if (isNum) {
            for (i = 0; i < num.length; i++)
            mtArr.push(num[i]);
        }

       
        
        
    }else {
      alert("please select a character!");
      return charSpec();
      
    };

    for (i = 0; i < userInput; i++) {
      passArr.push(mtArr[Math.floor(Math.random() * mtArr.length)])
    }
    
    return passArr.join("");
    

};

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
