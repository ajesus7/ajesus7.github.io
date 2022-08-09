// JavaScript Document
console.log('HI');
function inchesToPixels() {
    // inputInches stores the value ( # inches ) that the user entered
    const inputInches = parseFloat(document.getElementById("inches").value);

    // outputPixels stores the # of pixels, calculated by multiplying # of inches by 96 (rounded)
    let outputPixels = Math.round(inputInches * 96);

    // returns the outputPixels value to the HTML 
    document.getElementById("conversion").innerHTML = inputInches + " inches is " + outputPixels + " Pixels!";
}

