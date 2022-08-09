// JavaScript Document

// adds event listener to load js file when html page loads
window.addEventListener("load", main);

// 40 man array
let fortyMan = ['Yency Almonte',
    'Tyler Anderson',
    'Phil Bickford',
    'Justin Bruihl',
    'Walker Buehler',
    'Garrett Cleavinger',
    'Danny Duffy',
    'Caleb Ferguson',
    'Tony Gonsolin',
    'Victor Gonz‡lez',
    'Brusdar Graterol',
    'Michael Grove',
    'Andrew Heaney',
    'Daniel Hudson',
    'Andre Jackson',
    'Tommy Kahnle',
    'Clayton Kershaw',
    'Craig Kimbrel',
    'Dustin May',
    'Reyes Moronta',
    'Jimmy Nelson',
    'Ryan Pepiot',
    'Evan Phillips',
    'David Price',
    'Jake Reed',
    'Jake Reed',
    'Blake Treinen',
    'Julio Ur’as',
    'Alex Vesia',
    'Mitch White',
    'Austin Barnes',
    'Will Smith',
    'Hanser Alberto',
    'Eddy Alvarez',
    'Jacob Amaya',
    'Freddie Freeman',
    'Jake Lamb',
    'Eddys Leonard',
    'Gavin Lux',
    'Zach McKinstry',
    'Max Muncy',
    'Edwin R’os',
    'Trea Turner',
    'Justin Turner',
    'Jorbit Vivas',
    'Cody Bellinger',
    'Mookie Betts'
]

// Active player array
let activePlayers = [
    'Yency Almonte',
    'Tyler Anderson',
    'Phil Bickford',
    'Caleb Ferguson',
    'Tony Gonsolin',
    'Clayton Kershaw',
    'Craig Kimbrel',
    'Reyes Moronta',
    'Evan Phillips',
    'David Price',
    'Julio Ur’as',
    'Alex Vesia',
    'Mitch White',
    'Austin Barnes',
    'Will Smith',
    'Hanser Alberto',
    'Freddie Freeman',
    'Jake Lamb',
    'Gavin Lux',
    'Zach McKinstry',
    'Max Muncy',
    'Trea Turner',
    'Justin Turner',
    'Cody Bellinger',
    'Mookie Betts',
    'Trayce Thompson'
]

// Main function

function main() {

// Find the players on both rosters and return that to the HTML in section 'A'
let duplicatesArray = fortyMan.filter(man => activePlayers.indexOf(man) != -1);
document.getElementById("result-a").innerHTML = duplicatesArray;

// Find the players unique to the 40man roster
let uniqueArray = fortyMan.filter(man => activePlayers.indexOf(man) === -1);
document.getElementById("result-b").innerHTML  = uniqueArray;

// Find the total count of unique players 
document.getElementById("result-c").innerHTML = uniqueArray.length;

// Sort active players is descending order
document.getElementById("result-d").innerHTML = activePlayers.reverse();

// Finding 12th active player on the list in descending order
document.getElementById("result-e").innerHTML = activePlayers[11];

}


