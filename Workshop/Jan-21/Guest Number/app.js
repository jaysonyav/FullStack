// Generate a random number between 0 and 100
const correctNumber = Math.floor(Math.random() * 100);
console.log(correctNumber);

// Get elements from the DOM
const guessInput = document.getElementById("guess-input");
const guessButton = document.getElementById("guess-button");
const result = document.getElementById("result");

// Add an event listener to the guess button
guessButton.addEventListener("click", function(){
  // Get the value from the input field
  let guess = guessInput.value;

  // Check if the guess is correct
  if (guess === correctNumber) {
    result.textContent = "Congratulations! You guessed the correct number.";
  } else if (guess > correctNumber) {
    result.textContent = "Sorry, your guess is too high. Try again.";
  } else {
    result.textContent = "Sorry, your guess is too low. Try again.";
  }
});
