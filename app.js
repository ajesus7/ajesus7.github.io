const textDisplay = document.getElementById("animated");
const phrases = ['hello my name is Aidan.', 'I like to design things.', 'I am a GRC student at Cal Poly.'];

let i = 0;
let j = 0;
let currentPhrase = [];
let isDeleting = false;
let isEnd = false;

function loop() {
    isEnd = false;
    textDisplay.textContent = currentPhrase.join('');
    if (i < phrases.length) {
        if (!isDeleting && j <= phrases[i].length) {
            currentPhrase.push(phrases[i][j]);
            console.log('add a letter', j)
            j++;
        }
        if (isDeleting && j <= phrases[i].length) {
            currentPhrase.pop(phrases[i][j]);
            console.log('remove a letter', j);
            j--;
        }
        if (j == phrases[i].length) {
            isDeleting = true;
            isEnd = true;
        }
        if (isDeleting && j === 0) {
            currentPhrase = [];
            i++;
            isDeleting = false;
            if (i == phrases.length) {
                i = 0;
            }
        }   
        }
        const spedUp = Math.random() * (80 -50) + 50
        const normalSpeed = Math.random() * (300 -200) + 200
        const time = isEnd ? 3000 : isDeleting ? spedUp : normalSpeed;
        setTimeout(loop, time)
    }

loop();

