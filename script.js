var daRandom = {                    //This is the criteria selection initial arrays.
  lowwer: ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'],
  upper: ['A','B','C','D','E','F','G','H','J','K','L','M','N','P','Q','R','S','T','U','V','W','X','Y','Z'],   //Ommitted I and O.
  numbers: [0,1,2,3,4,5,6,7,8,9],
  charspec: ['!','@','#','$','%','^','/','&','*','?']
}

var msg = 'Password must be between 8 and 128 characters.';   //** Responses to user wrong selections **/
var msg1 = 'You must select a number.';
var msg2 = 'You must select atleast 1 criteria.';
    
function writePassword() {
                                      
  var quest1;                                                 //Variables for list of questions to ask the user.
  var quest2;
  var quest3;
  var quest4;
  var quest5;

  var pick = 0;                                                //This represents count of how many criteria are selected.
  var dadivr = 0;
  var nwlray;
  var newPswd = [];
  var pwdAdjust;
  // var k;
  // var i;
  var rand
  var temp = [];
  // var x;                                                       //This is for the loop nmlray and the push into the new array.  It keeps the number within the range of the selected array. 
  
  quest1 = prompt('How many characters in the password?');
  if ((quest1 <8) || (quest1 >128)) {
    document.getElementById('dialog').innerHTML = msg; return;
  } else if (isNaN(quest1)) {
  document.getElementById('dialog').innerHTML = msg1; return;
  } else {
    quest1 = quest1;
  }

  quest2 = confirm('Include lowercase letters?');               //Criteria confirmation questions for user.
    
  quest3 = confirm('Include uppercase letters?');
  
  quest4 = confirm('Include numbers?');
  
  quest5 = confirm('Include special characters?');
    
  if (
    (quest2 == false && quest3 == false) &&
    (quest4 == false && quest5 == false)                      //This validate the user selects atleast one criteria.
  ) {   
    document.getElementById('dialog').innerHTML = msg2; return;
  }
           
  if (quest2 ===true) {pick++;};                               //This block gets a criteria selection count
  if (quest3 ===true) {pick++;}; 
  if (quest4 ===true) {pick++;};
  if (quest5 ===true) {pick++;};  
  dadivr = Math.ceil(quest1 / pick);

console.log(dadivr);                                //Used to debug
  
  if (quest2 ===true) {                              
    for(let i = 0; i < daRandom.lowwer.length; i++) 
    {   
      rand = Math.floor(Math.random() * daRandom.lowwer.length);   //Found a better way to randomize the array  https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array#:~:text=The%20de%2Dfacto%20unbiased%20shuffle,Yates%20(aka%20Knuth)%20Shuffle.&text=function%20shuffle(array)%20%7B%20var,while%20(0%20!%3D%3D
      temp = daRandom.lowwer[i];
      daRandom.lowwer[i] = daRandom.lowwer[rand];
      daRandom.lowwer[rand] = temp;
    }
  }

  console.log(daRandom.lowwer);                     //Used to debug
  if(quest2 ===true) {
    for(let x = 0; x < dadivr; x++) {
      nwlray = [Math.floor(Math.random() * daRandom.lowwer.length)];  //This must be used because dadivr can be a number higher that the numbers in the array.
      temp = daRandom.lowwer[nwlray];
      daRandom.lowwer[nwlray] = daRandom.lowwer[nwlray];
      daRandom.lowwer[nwlray] = temp;
      newPswd.push(daRandom.lowwer[nwlray]);  
    }
  }  

console.log(daRandom.lowwer);                       //Used to debug
console.log(newPswd);
  
  if (quest3 ===true) {
    for(let i = 0; i < daRandom.upper.length; i++) 
    {
      rand = Math.floor(Math.random() * daRandom.upper.length)
      temp = daRandom.upper[i]
      daRandom.upper[i] = daRandom.upper[rand]
      daRandom.upper[rand] = temp
    }
  }

  if(quest3 ===true) {
    for(let x = 0; x < dadivr; x++) {
    nwlray = [Math.floor(Math.random() * daRandom.upper.length)];   //This will only select a random number within the array.
    temp = daRandom.upper[nwlray];
    daRandom.upper[nwlray] = daRandom.upper[nwlray];
    daRandom.upper[nwlray] = temp;
    newPswd.push(daRandom.upper[nwlray]);  
    }
  }  
  
  if (quest4 ===true) {
    for(let i = 0; i < daRandom.numbers.length; i++) 
    {
      rand = Math.floor(Math.random() * daRandom.numbers.length)
      temp = daRandom.numbers[i]
      daRandom.numbers[i] = daRandom.numbers[rand]
      daRandom.numbers[rand] = temp
    }
  }

  if(quest4 ===true) {
    for(let x = 0; x < dadivr; x++) {
    nwlray = [Math.floor(Math.random() * daRandom.numbers.length)];   //This will only select a random number within the array.
    temp = daRandom.numbers[nwlray];
    daRandom.numbers[nwlray] = daRandom.numbers[nwlray];
    daRandom.numbers[nwlray] = temp;
    newPswd.push(daRandom.numbers[nwlray]);  
    }
   } 
  
  if(quest5 ===true) {
    for(let i = 0; i < daRandom.charspec.length; i++) 
    {
      rand = Math.floor(Math.random() * daRandom.charspec.length)
      temp = daRandom.charspec[i]
      daRandom.charspec[i] = daRandom.charspec[rand]
      daRandom.charspec[rand] = temp
    }
  }

  if(quest5===true) {
    for(let x = 0; x < dadivr; x++) {
    nwlray = [Math.floor(Math.random() * daRandom.charspec.length)];    //This will only select a random number within the array.
    temp = daRandom.charspec[nwlray];
    daRandom.charspec[nwlray] = daRandom.charspec[nwlray];
    daRandom.charspec[nwlray] = temp;
    newPswd.push(daRandom.charspec[nwlray]);  
    }
  }

console.log(newPswd);                                         //Used to debug (show password array order before shuffling)

  for(let i = 0; i < newPswd.length; i++)                         //This randomizes the array from which the password will be selected
    {
      rand = Math.floor(Math.random() * newPswd.length)
      temp = newPswd[i]
      newPswd[i] = newPswd[rand]
      newPswd[rand] = temp
    }                                                         //This is so it does not delete the last criteria selection only in the next step.
  
console.log(newPswd);                                         //Used to debug

  if (newPswd != quest1) {                                    //The block will adjust the password difference due to Math.floor rounding
    pwdAdjust = newPswd.length - quest1;
    for (let k = 0; k < pwdAdjust; k++) {newPswd.pop()};
    console.log (newPswd.length);                             //These two lines check to see if the user password length and actual password have the same abount of characters
    console.log (quest1);
    document.getElementById('password').innerHTML = newPswd;
  }
};

// genpw();
generate.addEventListener('click', writePassword);

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