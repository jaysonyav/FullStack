//Genrate a random number between 0 and 100
const correctNumber = Math.floor(Math.random()*100)+1;
console.log(correctNumber);


//Get elements from the DOM
const guessInput =  document.getElementById('guess-input');
const guessButton = document.getElementById('guess-button');
const result = document.getElementById('result');
const topLine = document.getElementById('top-line');
const guessCounter = document.getElementById('counter');

let counter = 4;
let maxNumber = 100;
let minNumber = 1;

guessButton.addEventListener("click", function(){

    let guess = guessInput.value;
    
    if(guess==correctNumber){
        result.textContent = 'Congratulations! You guessed the correct number';
        guessCounter.textContent = `You find the correct number in your ${5-counter}. attempt`
        return;
    }
    
    if(counter>0){
    if(guess> correctNumber){
        result.textContent = 'Sorry, your guess is too high. Try again.'
        maxNumber= guess;
        topLine.textContent = `Guess a number between ${minNumber} and ${maxNumber}`;
        guessCounter.textContent = `You have ${counter} attempt to find the number`
        counter--;
    }else{
        result.textContent = 'Sorry, your guess is too low. Try again.'
        minNumber= guess;
        topLine.textContent = `Guess a number between ${minNumber} and ${maxNumber}`;
        guessCounter.textContent = `You have ${counter} attempt to find the number`
        counter--;
    }}else{
        guessCounter.textContent = 'Your don\'t have any attempts left'
        result.textContent = `The number was ${correctNumber}`
    }

});



