console.log("Simon says");

const countDown = document.getElementById("countdown");
let numberList = document.querySelector("ul");
const formElement = document.getElementById("answers-form");
let numbers = [];
let userNumbers = [];
let guessedNumbers = [];

// GENERA 5 NUMERI CASUALI
//  FOR 5 volte, genera numero casuale
//  Mettere numero casuale in array

generateFiveRandomNumbers();
// console.log(numbers);
// console.log(numbers.length);
//  Mostrare array
for (let i = 0; i < 5; i++) {
  numberList.innerHTML += `<li>${numbers[i]}</li>`;
}
console.log(numbers);

// far partire un timer
timer();

// nascondere numeri
// mostrare form con input

// simonSaysPlayerTurn

setTimeout(() => {
  numberList.classList.add("d-none");
  formElement.classList.remove("d-none");
}, 3000);

// Mandare input in un array

function userInputCheck() {
  formElement.addEventListener("submit", (event) => {
    event.preventDefault();
    const userInput = document.getElementsByClassName("form-control");
    const userNumbers = [];
    for (let i = 0; i < userInput.length; i++) {
      userNumbers.push(userInput[i].value);
    }
    console.log(userNumbers);
    for (let i = 0; i < 6; i++) {
      if (numbers.toString().includes(userNumbers[i])) {
        guessedNumbers.push(userNumbers[i]);
      } else {
        guessedNumbers = guessedNumbers;
      }
      console.log(guessedNumbers);
    }
  });
}

userInputCheck();

// Confrontare l'array dei numeri casuali con quelli trovati dall'utente
// Salvare in array i numeri in comune

// OUTPUT
// Quanti numeri hai trovato? (lunghezza nuovo array)
// Quali? (posizione elementi in array)

// FUNCTIONS
function generateRandomNumber(max) {
  return Math.floor(Math.random() * max);
}

function generateFiveRandomNumbers() {
  for (let i = 0; i < 5; i++) {
    const number = generateRandomNumber(50);
    numbers.push(number);
  }
  return numbers;
}

function timer() {
  let count = 30;
  countDown.innerText = count;
  timer = setInterval(() => {
    countDown.innerText = --count;
    if (count < 1) {
      clearInterval(timer);
    }
  }, 1000);
}
