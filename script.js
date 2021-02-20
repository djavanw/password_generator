var daRandom = {
  lowwer: ['a','b','c','d','e','f','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'],
  upper: ['K','L','M','N','O','P','Q','R'],
  numbers: [0,1,2,3,4,5,6,7,8,9],
  charspec: ['!','@','#','$','%','/','&','*']
}

var lowwer = {
  pick: true,
  letters:['a','b','c','d','e','f','h','i','j'] 
};

var upper = {
  pick: true,
  upletter: ['K','L','M','N','O','P','Q','R']
};

var numbers = {
  pick: true,
  range: [0,1,2,3,4,5,6,7,8,9]
};

var charspec = {
  pick: true,
  characters: ['!','@','#','$','%','/','&','*']
};

var quest1;
var quest2;
var quest3;
var quest4;
var quest5;
var quest6;
var mnray = [];  //This is the empty array that will hold the selected combined arrays for the generated random password.

var i;   //This for the loop to make one array in the 




var lowwer = ['a','b','c','d','e','f','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upper = ['A','B','C,','D','K','L','M','N','O','P','Q','R'];
var numbers = [0,1,2,3,4,5,6,7,8,9];
var charspec = ['!','@','#','$','%','/','&','*'];

var pswdnum = ' ';
var msg = 'Password must be between 8 and 128 characters.';
var msg2 = 'You must select atleast 1 criteria.';
var msg1 = 'Click Generate Password when you are ready.';
var msg3 = 'You must select a number.';


    
function genpw() {
  
  quest1 = confirm('Would you like to generate a password?');
  if (!quest1) {
    document.getElementById('dialog').innerHTML = msg1; return;
  } 


  quest2 = prompt('How many characters in the password?');
    if ((quest2 <8) || (quest2 >128)) {
      document.getElementById('dialog').innerHTML = msg; return;
    } else if (isNaN(quest2)) {
    document.getElementById('dialog').innerHTML = msg3; return;
    } else {
      quest2 = quest2;
    }


  quest3 = confirm('Include lowercase letters?');
  if (quest3 ==true) {
  for (i = 0; i < daRandom.lowwer.length; i++) {mnray.push(daRandom.lowwer[i])};
  } else {
    quest3 = quest3;
  }


  quest4 = confirm('Include uppercase letters?');
  if (quest4 ==true) {
  for (i = 0; i < upper.length; i++) {mnray.push(upper[i])};
  } else {
  quest4 = quest4;
  }


  quest5 = confirm('Include numbers?');
  if (quest5 ==true) {
  for (i = 0; i < numbers.length; i++) {mnray.push(numbers[i])};
  } else {
  quest5 = quest5;
  }

  quest6 = confirm('Include special characters?');
  if (quest6 ==true) {
  for (i = 0; i < charspec.length; i++) {mnray.push(charspec[i])};  
  } else {
  quest6 = quest6;
  }

    if (
      (quest3 == false && quest4 == false) &&
      (quest5 == false && quest6 == false)             //This validate the user selects atleast one criteria.
    ) {   
      document.getElementById('dialog').innerHTML = msg2; return;
    }

};

genpw();

/*
var question = prompt('How many characters in the password?');
  if ((question >= 8) && (question <= 128)) {
    question = psnumchar;
  } else {
    document.write = msg;
  }
*/


// Assignment Code
// var charspec = [U+0021, U+0024, U+0025, U+0026, U+0023];
// var numslc = [0,1,2,3,4,5,6,7,8,9];
// var lowwer = ['a','b','c','d','e','f','h','i','j'];
// var upper =['K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];



// var generateBtn = document.getElementById("#generate");
// var userMsg = prompt('Would you like to generate a password?');



// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.getElementById("#password");

//   passwordText.value = password;


// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);



/****************This is the starter code ****************** 
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
   var password = generatePassword();
   var passwordText = document.querySelector("#password");

   passwordText.value = password;
 }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
*********** This is the starter code***********************/