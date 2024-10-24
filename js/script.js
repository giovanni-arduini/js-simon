console.log("Simon says");

const countDown = document.getElementById("countdown");
let numbers = document.getElementById("numbers-list");
const formElement = document.getElementById("answers-form");

// GENERA 5 NUMERI CASUALI
//  FOR 5 volte, genera numero casuale

numbers = [];
for (let i = 0; i < 5; i++) {
  const number = generateRandomNumbers(50);
  numbers.push(number);
}
// console.log(numbers);

//  Mettere numero casuale in array

//  Mostrare array

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
function generateRandomNumbers(max) {
  return Math.floor(Math.random() * max);
} // console.log(generateFiveRandomNumbers(50));
