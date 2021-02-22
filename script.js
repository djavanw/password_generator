var daRandom = {                    //This is the criteria selection initial arrays.
  lowwer: ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'],
  upper: ['A','B','C','D','E','F','G','H','J','K','L','M','N','P','Q','R','S','T','U','V','W','X','Y','Z'],   //Ommitted I and O.
  numbers: [0,1,2,3,4,5,6,7,8,9],
  charspec: ['!','@','#','$','%','^','/','&','*','?']
}

var msg = 'Password must be between 8 and 128 characters.';   //** Responses to user wrong selections **/
var msg1 = 'You must select a number.';
var msg2 = 'You must select atleast 1 criteria.';
var msg3 = 'Click Generate Password when you are ready.';
    
function genpw() {

  var quest1;  //List of questions to ask the user.
  var quest2;
  var quest3;
  var quest4;
  var quest5;
  var quest6;

  //var mnray = [];  //This is the empty array that will hold the selected combined arrays for the generated random password.

  var pick = 0;    //This represents count of how many criteria are selected.
  var dadivr = 0;
  var nwlray;
  var j;
  var newPswd = [];
  var pwdAdjust;
  var k;
  // var reallyNew = [];

  //var i;   //This for the loop to make one array in the 

  // document.getElementById('password').innerHTML = ' ';  //This clears out the password area
  // quest1 = confirm('Would you like to generate a password?');
  // if (!quest1) {
  //   document.getElementById('dialog').innerHTML = msg3; return;
  // } 

  quest2 = prompt('How many characters in the password?');
    if ((quest2 <8) || (quest2 >128)) {
      document.getElementById('dialog').innerHTML = msg; return;
    } else if (isNaN(quest2)) {
    document.getElementById('dialog').innerHTML = msg1; return;
    } else {
      quest2 = quest2;
    }

  quest3 = confirm('Include lowercase letters?');
  // if (quest3 ==true) {
    // for (j = 0; j < dadivr; j++) {
    // nwlray = [Math.floor(Math.random() * daRandom.lowwer.length)];
    // newPswd.push(daRandom.lowwer[nwlray])};
  // for (i = 0; i < daRandom.lowwer.length; i++) {mnray.push(daRandom.lowwer[i])};
  // } else {
  //   quest3 = quest3;
  // }
  
  quest4 = confirm('Include uppercase letters?');
  // if (quest4 ==true) {
    // for (j = 0; j < dadivr; j++) {
    // nwlray = [Math.floor(Math.random() * daRandom.upper.length)];
    // newPswd.push(daRandom.upper[nwlray])};
  // for (i = 0; i < daRandom.upper.length; i++) {mnray.push(daRandom.upper[i])};
  // } else {
  // quest4 = quest4;
  // }

  quest5 = confirm('Include numbers?');
  // if (quest5 ==true) {
    // for (j = 0; j < dadivr; j++) {
    // nwlray = [Math.floor(Math.random() * daRandom.numbers.length)];
    // newPswd.push(daRandom.numbers[nwlray])};
  // for (i = 0; i < daRandom.numbers.length; i++) {mnray.push(daRandom.numbers[i])};
  // } else {
  // quest5 = quest5;
  // }

  quest6 = confirm('Include special characters?');
  // if (quest6 ==true) {
    // for (j = 0; j < dadivr; j++) {
    // nwlray = [Math.floor(Math.random() * daRandom.charspec.length)];
    // newPswd.push(daRandom.charspec[nwlray])};
  // for (i = 0; i < daRandom.charspec.length; i++) {mnray.push(daRandom.charspec[i])};  
  // } else {
  // quest6 = quest6;
  // }
  
  if (
    (quest3 == false && quest4 == false) &&
    (quest5 == false && quest6 == false)            //This validate the user selects atleast one criteria.
  ) {   
    document.getElementById('dialog').innerHTML = msg2; return;
  }
           
  if (quest3 ==true) {pick++;};                     //This block gets a criteria selection count
  if (quest4 ==true) {pick++;}; 
  if (quest5 ==true) {pick++;};
  if (quest6 ==true) {pick++;};  
  dadivr = Math.ceil(quest2 / pick);

console.log(dadivr);                                //Used to troubleshoot

  if (quest3 ==true) {
    for (j = 0; j < dadivr; j++) {
    nwlray = [Math.floor(Math.random() * daRandom.lowwer.length)];
    newPswd.push(daRandom.lowwer[nwlray])};
  }

  if (quest4 ==true) {
    for (j = 0; j < dadivr; j++) {
    nwlray = [Math.floor(Math.random() * daRandom.upper.length)];
    newPswd.push(daRandom.upper[nwlray])};
  }

  if (quest5 ==true) {
    for (j = 0; j < dadivr; j++) {
    nwlray = [Math.floor(Math.random() * daRandom.numbers.length)];
    newPswd.push(daRandom.numbers[nwlray])};
  }

  if (quest6 ==true) {
    for (j = 0; j < dadivr; j++) {
    nwlray = [Math.floor(Math.random() * daRandom.charspec.length)];
    newPswd.push(daRandom.charspec[nwlray])};
  }
console.log(newPswd);                                     //Used to troubleshoot
newPswd.sort(function(a,b){return 0.5 - Math.random()});  //This is so it does not delete the last criteria selection only.
console.log(newPswd);                                     //Used to troubleshoot
newPswd.sort(function(a,b){return 0.5 - Math.random()});
console.log(newPswd);                                     //Used to troubleshoot

  if (newPswd != quest2) {                                //The block will adjust the password difference due to Math.floor rounding
    pwdAdjust = newPswd.length - quest2;
    for (k = 0; k < pwdAdjust; k++) {newPswd.pop()};
    console.log (newPswd.length);                         //These two lines check to see if the user password length and actual password have the same abount of characters
    console.log (quest2);

    newPswd.sort(function(a,b){return 0.5 - Math.random()});  // Found code example on https://www.w3schools.com/js/tryit.asp?filename=tryjs_array_sort_random
    document.getElementById('password').innerHTML = newPswd;
  }

  };

  // genpw();
  generate.addEventListener('click', genpw);



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
*********** This is the starter code*************************/