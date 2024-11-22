let attempts = 0;
let coinCombo = [];
const coinOptions = ['H', 'T'];


function randomizeCoins() {
    coinCombo = [
        coinOptions[Math.floor(Math.random() * 2)], 
        coinOptions[Math.floor(Math.random() * 2)]
    ];
    console.log(`Coins are: ${coinCombo[0]}, ${coinCombo[1]}`); 
    resetBowlDisplay(); 
}


function resetBowlDisplay() {
    document.getElementById('bowl1').innerText = '❓';
    document.getElementById('bowl2').innerText = '❓';
}


function makeGuess() {
    const guess1 = document.getElementById('guess1').value.toUpperCase();
    const guess2 = document.getElementById('guess2').value.toUpperCase();

    
    if (!guess1 || !guess2 || 
        (guess1 !== 'H' && guess1 !== 'T') || 
        (guess2 !== 'H' && guess2 !== 'T')) {
        alert('Please enter valid guesses (H or T).');
        return;
    }

   
    attempts++;
    document.getElementById('attempts').innerText = attempts;

    
    if (guess1 === coinCombo[0] && guess2 === coinCombo[1]) {
        document.getElementById('result').innerText = 'Correct! You guessed the coins!';
        document.getElementById('bowl1').innerText = '😊'; 
        document.getElementById('bowl2').innerText = '😊';
        document.getElementById('restartButton').style.display = 'block';
        document.getElementById('submitGuess').disabled = true;
    } else {
        document.getElementById('result').innerText = 'Wrong guess. Try again!';
        document.getElementById('bowl1').innerText = '👍'; 
        document.getElementById('bowl2').innerText = '👍';
    }
}


function restartGame() {
    attempts = 0;
    document.getElementById('attempts').innerText = attempts;
    document.getElementById('result').innerText = '';
    document.getElementById('guess1').value = '';
    document.getElementById('guess2').value = '';
    document.getElementById('restartButton').style.display = 'none';
    document.getElementById('submitGuess').disabled = false; 
    randomizeCoins();
}

window.onload = function () {
    randomizeCoins(); 

    
    document.getElementById('submitGuess').addEventListener('click', makeGuess);

    
    document.getElementById('restartButton').addEventListener('click', restartGame);
};



