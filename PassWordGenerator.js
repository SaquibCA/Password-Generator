const passwordForm = document.getElementById("passWordBox");
const minPassLength = 8;
const maxPassLength = 128;
let specialCharsCheckbox = document.getElementsByName("specialChars")[0];
let numbersCheckbox = document.getElementsByName("numbers")[0];
let lwrCharsCheckbox = document.getElementsByName("lwrChars")[0];
let upprCharsCheckbox = document.getElementsByName("upprChars")[0];


// function to generate a password with the number of characters specified by the user when prompted
function createPassword() {

    // defines the character sets to be used for password generation
    const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseletters = lowercaseLetters.toUpperCase();
    const numbersList = "0123456789";
    const specialCharacters = "!@#$%^&*()_+{}|:?><[]";

    // defines the checkbox states and where they are in the DOM
    lettersLow = document.getElementsByName("lwrChars")[0].checked;
    lettersHigh =  document.getElementsByName("upprChars")[0].checked;
    numbers = document.getElementsByName("numbers")[0].checked;
    specials = document.getElementsByName("specialChars")[0].checked;

    // Prompts the user to specify how long they want their password to be
    let passwordLength = prompt("Length of password? (Must be from 8 to 128 characters)");

    // if no checkboxes are selected, then the user is prompted to fill out the form and reload the page
    if (lettersLow == false && lettersHigh == false && numbers == false && specials == false){
        alert("You must select at least one special feature")

        /* reloads the page to get back to the point where the event hasn't been triggered as there's no waiting while loop for checkbox input. 
        Not sure why, but AskBCS put it in to make the thing work. */
        window.location.reload();
    }
    //Responsible for generating the the password and placing it in the textarea of the page.
    if (passwordLength >= minPassLength && passwordLength <= maxPassLength) {

        // Clears password var if there has been a previous passgen so we don't get stacking previously gen'd passwords
        password = "";

        // Log if the box is checked for the respective char type
        console.log(specials, numbers, lettersLow, lettersHigh)

        // add a character as long as the # of iterations is less than the user specified passwordLength
        for (i=0; i<passwordLength;i++) {
            
            if (lettersLow && password.length < passwordLength) {
                password = password+=lowercaseLetters.charAt(Math.floor(Math.random() * lowercaseLetters.length));
            }
            if (lettersHigh && password.length < passwordLength) {
                password = password+=uppercaseletters.charAt(Math.floor(Math.random() * uppercaseletters.length));

            }
            if (numbers && password.length < passwordLength) {
                password = password+=numbersList.charAt(Math.floor(Math.random() * numbersList.length));

            }
            if (specials && password.length < passwordLength) {
                password = password+=specialCharacters.charAt(Math.floor(Math.random() * specialCharacters.length));
            }

    }

    // Add generated password to html form
    passwordForm.value = password;
}
    else{
        alert("Password MUST BE BETWEEN 8 AND 128 characters!")
    }
}

// copy the generated password to users clipboard
function copyToClipboard() {
    let copyPass = document.getElementById("passWordBox");
    copyPass.focus();
    copyPass.select();
    document.execCommand("copy");
    alert("Password copied!");
  }
  