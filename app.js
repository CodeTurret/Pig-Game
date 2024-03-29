/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, ActivePlayer;

scores = [0,0];
roundScore = 0;
activePlayer = 0;

// everytime role the dice, it generates a number
//  dice = Math.floor(Math.random() * 6 +1);

// DOM Manipulation
//document.querySelector('#current-' + activePlayer).textContent = dice;

//document.querySelector('#current-0').innerHTML = '<em>' + dice +'</em>';

// initially hide the dice icon
 document.querySelector('.dice').style.display = 'none';

document.getElementById('score-0').textContent = 0;
document.getElementById('current-0').textContent = 0;
document.getElementById('score-1').textContent = 0;
document.getElementById('current-1').textContent = 0;

 

// Event Listener 

// Callback function means that we just declare the function, the corrosponding event listener calls the function for us

// Anonymus function, function used without a name

document.querySelector('.btn-roll').addEventListener('click', function(){
    // do something;
    
    // 1. Generate Random number
    var dice = Math.floor(Math.random() * 6 +1);
    
    // 2. Display the result
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    
    // 'dice-' is the src name, then because of type coercion in JavaScript, dice variable is concatanate with 'dice-'
    diceDOM.src = 'dice-' + dice + '.png';
    
    
    // 3. Update the round score If the rolled number was NOT a 1
    if (dice !== 1)
        {
            // Add score to round score
            roundScore = roundScore + dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
            
        }
    else
        {
            // Next Player
           nextPlayer();
        }
});

// Event listener for "Hold" button
document.querySelector('.btn-hold').addEventListener('click', function(){
    // Add CURRENT score to GLOBAL score
    scores[activePlayer] += roundScore;
    
    
    // Update the UI
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
    
    
    // Check if player won the game
    
    if(scores[activePlayer] >=20){
        document.querySelector('#name-' + activePlayer).textContent = 'Winner!';   
    }
    else{
        // Next Player
        nextPlayer();
    }
    
   
});

function nextPlayer(){
     activePlayer === 0 ? activePlayer = 1 : activePlayer = 0; 
            roundScore = 0;
            
            document.getElementById('current-0').textContent = '0';
            document.getElementById('current-1').textContent = '0';
            
            
            document.querySelector('.player-0-panel').classList.toggle('active');
            
            document.querySelector('.player-1-panel').classList.toggle('active');
            
            // document.querySelector('.player-0-panel').classList.remove('active');            
            // document.querySelector('.player-1-panel').classList.add('active');
            
            document.querySelector('.dice').style.display = 'none';
}