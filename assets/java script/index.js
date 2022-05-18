const passwordDisplay = document.getElementById("password-display");

// Create a button handler using DOM methods to get button element
const startBtn = document.getElementById('imgButton').addEventListener('click', handleClick);

// arrays of characters to generate password
const numericChar  = ['0', '1', '2', '3', '4', '5', '6', '7',
    '8', '9'
];
const capitalChar = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N',
    'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
];
const smallChar = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
];
const specialChar = [
    '@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.',
];

// variable to store user input if users mistyped at input
// const enterCapsOnly = [
//     'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N',
//     'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
// ];

// create a function that will start the password generating process
function  handleClick(){
   
    // create a variable that will store the input of user
    /* parseInt is used here to correct(roundup) the input of the user. an example would be
    when a user input a number and a alphanumeric character like A10 or 009. The parseInt method will convert 
    the string into an interger thus allowing the process to work. In other words parseInt method will help
    to auto correct the user input at this stage as long as there is a viable number entered. it will allow 
    09, 090 and a90 but will not accept 009 (parseInt only allows the first intergers)  */
    
    const userInput = parseInt(
        prompt('Number of characters for your password (minimum 8)')  
    );

    if (!userInput){
        alert("Good bye");
        return null;
    }
    // // alert to user if they mistyped, and using capitals
    // if (userInput === enterCapsOnly) {
    //     alert("You must enter a number");
    //     return null;
    // }

    /* here the variable user input is passed in the if statement. the statement can then
    be interpreted as, 
    if the user enters an input, that is not a number, 
    store the input inside the variable "const userInput, 
    then use the if statement to express that this is not a number
    by providing the variable as an argument inside the if statement*/
    
    // if user enters the wrong input (that is not a number) then an alert will be sent.
    // the variable const userInput is used as the main source of data to declare the arguments.
    if (Number.isNaN(userInput)){
        alert('Input must be a number');
        return null;
    }

    if (userInput < 8){
        alert('Input must be more than 7 character, and less than 129');
        return null;
    } 

    if (userInput > 129){
        alert('Input must be less than 129 characters but more than 7');
        return null;
    } 

    const contNumericChar = confirm("Add numbers to Password.");

    const contCapitalChar = confirm ("Add capital letters to Password");

    const contSmallChar = confirm("Add small letters to Password");

    const contSpecialChar = confirm("Add special characters to Password");

    // if input does not contain any character set this code will run and send user an alert
    if (
        !contNumericChar &&
        !contCapitalChar &&
        !contSmallChar  &&
        !contSpecialChar
        ){ 
        alert("Please input at least one character type for password")
        return null;
    };

    const options = {
        userInput:  userInput,
        contNumericChar:contNumericChar,
        contCapitalChar: contCapitalChar,
        contSmallChar: contSmallChar,
        contSpecialChar: contSpecialChar,
    };

    // the variable "passWord" created here will be used to run the function to generate passWord
    const passWord = generatePassword(options)
    passwordDisplay.value = passWord;
    return;
}
// rounding up the   
function randomCharInArray(arr){
    let randomIndex = Math.floor(Math.random()* arr.length);
    let randElement = arr[randomIndex];

    return  randElement;
}

function generatePassword(options){

    let result = [];
    //let selectedRandChar = [];
    //let confirmedChar = [];

    let possibleChars = [];

    if (!options) return null;

    if (options.contNumericChar) {
        possibleChars = possibleChars.concat(numericChar);
    }

    if (options.contCapitalChar) {
        possibleChars = possibleChars.concat(capitalChar);
    }

    if (options.contSmallChar) {
        possibleChars = possibleChars.concat(smallChar);
    }

    if (options.contSpecialChar) {
        possibleChars = possibleChars.concat(specialChar);
    }

    // use a for loop  to loop through the arrays and select indexes  in arrays randomly
    for (let i = 0; i < options.userInput; i++) {
    
        let confirmedChar = randomCharInArray(possibleChars);
        result.push(confirmedChar);
    } 

    return result.join('');
}

