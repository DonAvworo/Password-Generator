const passwordDisplay = document.getElementById("password-display")
//create array function to hold password characters for prompts and alerts
const numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7',
    '8', '9'
];
const upperCasedCharacters = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N',
    'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
];
const lowerCasedCharacters = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
];
const specialCharacters = [
    '@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.',
];

const btnOptionA = document.querySelector("button").addEventListener("click", handleClick);


//events (prompts and alerts for user interactions)
//functions to be executed when button is clicked
function handleClick() {
    // A Variable to store length of password from user input created
    const length = parseInt(
        prompt("Number of characters for your password (minimum 8)"),
        10
    );

    if (Number.isNaN(length)) {
        alert("Please Enter a Number. For example, 10");
        return null;
    }

    if (length < 8) {
        alert(" Numbeer of characters must be at least 8");
        return null;
    }

    if (length > 128) {
        alert("Password characters must less than 129");
        return null;
    }

    const hasNumericCharacters = confirm(
        "Click OK to include numeric characters."
    );

    const hasSpecialCharacters = confirm(
        "Click OK to include special characters to Password."
    );

    const hasUpperCasedCharacters = confirm(
        "Click OK to include uppercase characters."
    );

    const hasLowerCasedCharacters = confirm(
        "Click OK to include lowercase characters."
    );

    // the code will run where users do not include any of the character types
    if (
        hasSpecialCharacters === false &&
        hasNumericCharacters === false &&
        hasLowerCasedCharacters === false &&
        hasUpperCasedCharacters === false
    ) {
        alert("A character type must be selected to generate password");
        return null;
    }

    const options = {
        length: length,
        hasSpecialCharacters: hasSpecialCharacters,
        hasNumericCharacters: hasNumericCharacters,
        hasLowerCasedCharacters: hasLowerCasedCharacters,
        hasUpperCasedCharacters: hasUpperCasedCharacters,
    };

    //to print password on inner html input
    const passWord = generatePassword(options)
    //console.log (passWord)
    passwordDisplay.value = passWord;
    return;
}

function getRandom(arr) {
    var randIndex = Math.floor(Math.random() * arr.length);
    var randElement = arr[randIndex];

    return randElement;
}

function generatePassword(options) {
   // var options = handleClick();

    var result = [];
    var possibleCharacters = [];
    var guaranteedCharacters = [];
    if (!options) return null;
    if (options.hasSpecialCharacters) {
        possibleCharacters = possibleCharacters.concat(specialCharacters);
        guaranteedCharacters.push(getRandom(specialCharacters));
    }
    if (options.hasNumericCharacters) {
        possibleCharacters = possibleCharacters.concat(numericCharacters);
        guaranteedCharacters.push(getRandom(numericCharacters));
    }
    if (options.hasLowerCasedCharacters) {
        possibleCharacters = possibleCharacters.concat(lowerCasedCharacters);
        guaranteedCharacters.push(getRandom(lowerCasedCharacters));
    }
    if (options.hasUpperCasedCharacters) {
        possibleCharacters = possibleCharacters.concat(upperCasedCharacters);
        guaranteedCharacters.push(getRandom(upperCasedCharacters));
    }
    for (var i = 0; i < options.length; i++) {
        var possibleCharacter = getRandom(possibleCharacters);

        result.push(possibleCharacter);
    }
    for (var i = 0; i < guaranteedCharacters.length; i++) {
        result[i] = guaranteedCharacters[i];
    }
    return result.join('');
}

