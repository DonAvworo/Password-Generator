// Create a button handler using DOM methods to get button element
const startBtn = document.getElementById('imgButton').addEventListener('click', generatePassword);

// create a function that will start the password generating process
function generatePassword(){
   
    // create a variable that will store the input of user
    /* parseInt is used here to correct(roundup) the input of the user. an example would be
    when a user input a number and a alphanumeric character like A10 or 009. The parseInt method will convert 
    the string into an interger thus allowing the process to work. In other words parseInt method will help
    to auto correct the user input at this stage as long as there is a viable number entered. it will allow 
    09, 090 and a90 but will not accept 009 (parseInt only allows the first intergers)  */
    
    const userInput = parseInt(
        prompt('Number of characters for your password (minimum 8)')
        
    );

    /* here the variable user input is passed in the if statement. the statement can then
    be interpreted as, 
    if the user enters an input, that is not a number, 
    store the input inside the variable "const userInput, 
    then use the if statement to express that this is not a number
    by providing the variable as an argument inside the if statement*/
    
    // if user enters the wrong input (that is not a number) then an alert will be sent.
    // the variable    
    if (Number.isNaN(userInput)){
        alert('Input must be a number');
        return null;
    }

    if (userInput < 8){
        alert('input must be more than 7 character')
    } 
    
    
   
}
