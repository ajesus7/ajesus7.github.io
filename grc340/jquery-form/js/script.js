// JavaScript Document

/* DOCSTRING: main function holds two event listeners, one for each
text input. when an input is changed, calculate and update the change
in individual price as well as update the total price. */

(function () { // THIS FUNCTION RUNS WHEN THE PAGE IS LOADED - IT WAS MENTIONED IN TEXTBOOK IT IS 'IFFE'

    // event listener for change in first input
    let firstInput = $('#input-1'); // grab input
    firstInput.on('change', function() {

        //first item price calculation
        let firstValue = $(this).val();
        let sectionOnePrice = $('#price-1-updater'); // grab id to update
        let itemOnePrice = 39.99 * firstValue; 
        sectionOnePrice.text(`$${itemOnePrice}`); // update HTML with price

        // used to calculate total price
        let secondValue = $('#input-2').val();
        let itemTwoPrice = 14.99 * secondValue;

        // calculate total price and update in html
        let totalValue = itemOnePrice + itemTwoPrice;
        totalValue = Math.round(totalValue * 1000) / 1000; // fix rounding errors
        let sectionTotalPrice = $('#final-price-updater'); //grab id to update
        sectionTotalPrice.text(`$${totalValue}`); //update total value
    });
    
    // event listener for change in second input
    let secondInput = $('#input-2'); // grab input
    secondInput.on('change', function() {

        //second item price calculation
        let secondValue = $(this).val();
        let sectionTwoPrice = $('#price-2-updater'); // grab id to update
        let itemTwoPrice = 14.99 * secondValue;
        sectionTwoPrice.text(`$${itemTwoPrice}`); // update HTML with price

        // used to calculate total price
        let firstValue = $('#input-1').val();
        let itemOnePrice = 39.99 * firstValue;

        //calculate total price and update in html
        let totalValue = itemOnePrice + itemTwoPrice;
        totalValue = Math.round(totalValue * 1000) / 1000; // fix rounding errors
        let sectionTotalPrice = $('#final-price-updater'); //grab id to update
        sectionTotalPrice.text(`$${totalValue}`); //update total value
    });

}());