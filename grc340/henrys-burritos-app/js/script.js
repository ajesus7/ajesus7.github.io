// JavaScript Document

// calls the init function when page is done loading
window.onload = init;

// gets page ready to respond to user input and updates title and reload link
function init() {
    // onclick run this function
    document.getElementById("orderButton").onclick = placeOrder;

    // access window width and height from window object
    const width = window.innerWidth;
    const height = window.innerHeight;

    //updates page title with width and height
    document.title = `Your window is ${width} x ${height}`;

    // updates text in reload-link p tag, adds class to same tag, also updates link
    document.getElementById("reload-link").innerHTML = "Refresh";
    document.getElementById("reload-link").className = "blueLink";

    //updates the link in the refresh button to the current page
    document.getElementById("reload-link").href = `${document.URL}`;
}

// holds all functionality once button is pressed (counts toppings, calculates price,
// constructs and displays greeting, and updates necessary HTML & CSS content)
function placeOrder() {
    //count toppings section

    //gets an array of all inputs
    const initialInputs = document.getElementsByTagName("input");

    let inputArray = [];

    //loop through input array, if input is a checkbox and checked, then append to inputArray list
    for (i = 0; i < initialInputs.length; i++) {
        if (initialInputs[i].type === "checkbox" && initialInputs[i].checked) {
            inputArray.push(initialInputs[i]);
        }
    }

    //count the number of toppings
    const topCount = inputArray.length;

    // if user selects spicy sauce, spicy variable will equal true, else it will equal false
    const spicy = document.getElementById("spicy").checked;

    // calculate price section
    let basePrice;

    //if user selects small, price is 8, medium is 9, large is 10
    if (document.getElementById("size-0").checked) {
        basePrice = 8;
    } else if (document.getElementById("size-1").checked) {
        basePrice = 9;
    } else {
        basePrice = 10;
    }

    //calculate the final price by adding topping price and base price
    const topPrice = topCount * 0.5;
    const finalPrice = topPrice + basePrice;

    // greeting creation section

    //grab the name user input
    const userName = document.getElementById("username").value;
    let personalized;

    //if user selected spicy, give them a spicy message, if the user selected chill, give them a chill message
    //output contains userName, topCount, finalPrice, and personalized
    if (spicy) {
        personalized = "spicy";
        document.getElementById("greeting-output").innerHTML = `Hi ${userName}, your ${topCount} topping burrito is $${finalPrice}.<br>Have a <span id="spicy-span">${personalized}</span> rest of your day!`;
    } else {
        personalized = "chill";
        document.getElementById("greeting-output").innerHTML = `Hi ${userName}, your ${topCount} topping burrito is $${finalPrice}.<br>Have a <span id="chill-span">${personalized}</span> rest of your day!`;
    }

    //change the class name of greeting section to 'greeting-section-green' so that it is more visible once button pressed
    let greetingContainer = document.getElementsByClassName("greeting-section");
    greetingContainer[0].className = "greeting-section-green";
}
