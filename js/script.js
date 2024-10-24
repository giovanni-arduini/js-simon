console.log("Simon says");

const countDown = document.getElementById("countdown");
let numberList = document.querySelector("ul");
const formElement = document.getElementById("answers-form");
let numbers = [];

// GENERA 5 NUMERI CASUALI
//  FOR 5 volte, genera numero casuale
//  Mettere numero casuale in array

generateFiveRandomNumbers();
console.log(numbers);
console.log(numbers.length);
//  Mostrare array

for (let i = 0; i < 5; i++) {
  numberList.innerHTML += `<li>${numbers[i]}</li>`;
}
console.log(numberList);
// far partire un timer

// nascondere numeri

// mostrare form con input

// Mandare input in un array

// Confrontare l'array dei numeri casuali con quelli trovati dall'utente

// Salvare in array i numeri in comune

// OUTPUT
// Quanti numeri hai trovato? (lunghezza nuovo array)
// Quali? (posizione elementi in array)

// FUNCTIONS
function generateRandomNumber(max) {
  return Math.floor(Math.random() * max);
} // console.log(generateFiveRandomNumbers(50));

function generateFiveRandomNumbers() {
  for (let i = 0; i < 5; i++) {
    const number = generateRandomNumber(50);
    numbers.push(number);
  }
  return numbers;
}
