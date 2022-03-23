let age = prompt("enter your age");

if (age < 22) {
    alert("Not allowedd to enter");
} else {
    alert("Entry allowed");
}

let firstcard = Math.floor(Math.random() * (12 - 2) + 2);
let secondcard = Math.floor(Math.random() * (12 - 2) + 2);

// let firstcard = 11;
// let secondcard = 10;
let hasBlackJack = false;
let isOutOfGame = false;

let sum = firstcard + secondcard;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.querySelector(".cards-el");

function checkSum() {
    cardsEl.textContent = "Cards: " + firstcard + ", " + secondcard;
    sumEl.textContent = "Sum: " + sum;
    if (sum <= 20) {
        message = "Do you want to draw a new card ?";
    } else if (sum === 21) {
        hasBlackJack = true;
        message = "Wohoo! you got a blackJack!";
    } else {
        isOutOfGame = true;
        message = "You are out of the game";
    }

    messageEl.textContent = message;
    // alert(message);
}

function newCard() {

    alert("new card button pressed");
}