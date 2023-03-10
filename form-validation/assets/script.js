const firstName = document.querySelector('#first-name');
const lastName = document.querySelector('#last-name');
const email = document.querySelector('#email-address');
const contactNumber = document.querySelector('#contact-number');
const pin = document.querySelector('#pincode');
const cardNumber = document.querySelector('#card-number');
const cardExpiry = document.querySelector('#card-expiry');
const cvv = document.querySelector('#cvv');
const warning = document.getElementsByTagName("span");
const form = document.querySelector("#banking-form")
var currentTime = new Date()
// returns the year (four digits)
var year = currentTime.getFullYear()
var errorMessage = [];

const isValue = value => value === '' ? true : false;   //Conditional Operator to check on value
const isLength = (length, min, max) => length < min || length > max ? true : false; //Conditional Operator to check on Length
const isEmail = email => {      //Regen pattern for email
    const regexPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regexPattern.test(email);
};

function firstNameValid(value) {      //Function for the name check
    if (isValue(value)) {
        warning[0].innerHTML = "First Name is required";   
    }
    else if (value !== null && isLength(value.length, 1, 30)){
        warning[0].innerText = "First Name is not valid"
    }
    warning[0].setAttribute('style', 'color:red')
}

function lastNameValid(value) {    
    if (isValue(value)) {
        warning[1].innerHTML = "Last Name is required";
    }
    else if (value !== null && isLength(value.length, 1, 30)){
        warning[1].innerText = "Last Name is not valid"
    }
    warning[1].setAttribute('style', 'color:red');
}

function emailValid(value) {    //Function for email check
    if (isValue(value)) {
        warning[2].innerHTML = "Email Adress is required";

    }
    else if (value !== null && !isEmail(value)){
        warning[2].innerHTML = "Email Address is not valid";
    }
    warning[2].setAttribute('style', 'color:red');
}

function contactNumberValid(value) {    //Function for contact number check
    if (isValue(value)) {
        warning[3].innerHTML = "Contact Number is required";

    }
    else if (value !== null && isLength(value.length, 10, 10)){
        warning[3].innerHTML = "Contact Number is not valid";
    }
    warning[3].setAttribute('style', 'color:red');
}

function pinValid(value) {    //Function for pin check
    if (isValue(value)) {
        warning[4].innerHTML = "Pin is required";

    }
    else if (value !== null && isLength(value.length, 6, 6)){
        warning[4].innerHTML = "Pin is not valid";
    }
    warning[4].setAttribute('style', 'color:red');
}

function cardNumberValid(value) {   //Function for card number check
    if (isValue(value)) {
        warning[5].innerHTML = "Card Number is required";

    }
    else if (value !== null && isLength(value.length, 16, 16)){
        warning[5].innerHTML = "Card Number is not valid";
    }
    warning[5].setAttribute('style', 'color:red');
}

function cardExpiryValid(value) {   //Function to check for card expiry
    if (isValue(value)) {
        warning[6].innerHTML = "Expiry Year is required";

    }
    else if (value !== null && isLength(value.length, 4, 4) && value!==year){
        warning[6].innerHTML = "Expiry Year is not valid";
    }
    warning[6].setAttribute('style', 'color:red');
}

function cvvValid(value) {      //Function to check for cvv number
    if (isValue(value)) {
        warning[7].innerHTML = "Cvv Number is required";

    }
    else if (value !== null && isLength(value.length, 3, 4)){
        warning[7].innerHTML = "Cvv is not valid";
    }
    warning[7].setAttribute('style', 'color:red');
}

form.addEventListener('submit', function (e) {  //Form Event function
    e.preventDefault();
    const firstNameValue = firstName.value;
    const lastNameValue = lastName.value;
    const emailValue = email.value;
    const contactNumberValue = contactNumber.value;
    const pinValue = pin.value;
    const cardNumberValue = cardNumber.value;
    const cardExpiryValue = cardExpiry.value;
    const cvvValue = cvv.value;

    for (let i = 0; i < warning.length; i++)
        warning[i].innerHTML = ''

    firstNameValid(firstNameValue);
    lastNameValid(lastNameValue);
    emailValid(emailValue);
    contactNumberValid(contactNumberValue);
    pinValid(pinValue);
    cardNumberValid(cardNumberValue);
    cardExpiryValid(cardExpiryValue);
    cvvValid(cvvValue);
    
});