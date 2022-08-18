// JavaScript Document

// THIS FUNCTION RUNS WHEN THE PAGE IS LOADED - IT WAS MENTIONED IN TEXTBOOK IT IS 'IFFE'
(function () {
    
    // Makes update account information form hidden by default - becomes visible after log in submitted
    let updateInformationForm = document.getElementById("update-information-container");
    updateInformationForm.className = 'hidden-display';


    // get login form
    let loginFormHolder = document.getElementById("login");

    // login form submit listener
    loginFormHolder.addEventListener('submit', function(e) {

        e.preventDefault(); // prevent default JS behavior
        let elements = this.elements; //forms inputs
        let usernameInput = elements.username.value; //grabs username input from list of elements by id
        let passwordInput = elements.password; //grabs password input from list of elements by id

        let usernameValidity, passwordValidity = false;

        // If username is between 1-15 characters and only contains letters
        if ( usernameInput.length < 16 && usernameInput.length > 0 && /^[a-zA-Z]+$/.test(usernameInput)) {
            usernameValidity = true; // needs to be true to change page
        } else {
            alert("Username must only contain characters and be at most 15 characters.")
        }

        // password between 10-20 characters
        if (passwordInput.value.length < 21 && passwordInput.value.length > 9 && password.getAttribute('type') == 'password') {
            passwordValidity = true; // needs to be true to change page
        } else {
            alert("Password must be between at least 10 and no more than 20 characters.")
        }

        if (usernameValidity && passwordValidity) {
            this.className = 'hidden-display';
            updateInformationForm.className = '';
        }

    }, false);
    
    // get update information form, creditInput
    let updateInformationFormHolder = document.getElementById("update-information");
    let creditInput = updateInformationFormHolder.elements.credit;
    
    // credit card input event listener to display the type of card
    creditInput.addEventListener('change', function(e) {
        
        //grab the p in the html to update with text
        let creditIcon = document.getElementById("credit-icon");

        //if statements to update the correct card based on the first number
        if (creditInput.value[0] == 6) {
            creditIcon.innerHTML = 'Discover';
        } else if (creditInput.value[0] == 5) {
            creditIcon.innerHTML = 'MasterCard';
        } else if (creditInput.value[0] == 4) {
            creditIcon.innerHTML = 'Visa';
        } else if (creditInput.value[0] == 3) {
            creditIcon.innerHTML = 'American Express';
        } else {
            creditIcon.innerHTML = 'Brand Unknown';
        }

    }, false);

    // update information form SUBMIT event listener
    updateInformationFormHolder.addEventListener('submit', function(e) {

        e.preventDefault(); // prevent default js behavior

        let elements = this.elements;
        let emailInput = elements.email; // grab email input BUT NOT value (by name/id)
        let phoneInput = elements.phone; //grab phone input BUT NOT VALUE (by name/id)
        let creditInput = this.elements.credit; //grab credit input but not value (by name/id)

        let emailValidity, phoneValidity, creditValidity = false;

        // credit input check

        // grab credit card pattern from HTML for REGEX testing
        const creditPattern = creditInput.getAttribute("pattern");
        const re = new RegExp(creditPattern); // make new REGEX object for testing

        //if credit input fits format, then section is valid, if not alert user
        if (re.test(creditInput.value)) {
            creditValidity = true;
        } else {
            alert('Credit Card input must match the specified format: xxxx xxxx xxxx xxxx')
        }

        // phone number check

        //grab phone format pattern from HTML for REGEX testing
        const phonePattern = phoneInput.getAttribute("pattern");
        const rePhone = new RegExp(phonePattern);  // make new REGEX object for testing

        //if phone input fits format, then section is valid, if not alert user
        if (rePhone.test(phoneInput.value)) {
            phoneValidity = true;
        } else {
            alert('Phone number must match specified format: xxx-xxx-xxxx ')
        }

        // email check 
        
        // grab email format pattern from HTML for REGEX testing
        const emailPattern = emailInput.getAttribute("pattern");
        const reEmail = new RegExp(emailPattern);  // make new REGEX object for testing

        //if email input fits format, then section is valid, if not alert user
        if (reEmail.test(emailInput.value)) {
            emailValidity = true;
        } else {
            alert('Email must match specified format: [characters]@[characters].[characters]')
        }

        // grab location where success message will be output in HTML
        const messageHolder = document.getElementById("success-message");
        if (creditValidity && phoneValidity && emailValidity) { //if all inputs are validated correctly
            messageHolder.className = 'success-message';
            messageHolder.innerHTML = 'Success! Your account has been updated!';
        }

    }, false);
}());