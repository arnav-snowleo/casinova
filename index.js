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

let cardsArray = [];

function checkSum(incomingcard) {
    // cardsEl.textContent = "Cards: " + firstcard + ", " + secondcard;

    if (incomingcard == null) {
        cardsArray.push(firstcard);
        cardsArray.push(secondcard);
    }

    cardsArray.push(incomingcard);
    cardsEl.textContent = "Cards: " + cardsArray;

    sumEl.textContent = "Sum: " + sum;
    if (sum <= 20) {
        message = "Do you want to draw a new card ?";
    } else if (sum === 21) {
        hasBlackJack = true;
        message = "Wohoo! you got a blackJack!";
    } else {
        isOutOfGame = true;
        disableNewCardBtn();
        message = "You are out of the game";
    }

    messageEl.textContent = message;
    // alert(message);
}

function disableNewCardBtn() {
    if (isOutOfGame) {
        alert("You are out of the game");
        document.querySelector("#new-card").disabled = true;
    }
}

function resetAndPlayAgain() {}

function newCard() {
    let newCard = Math.floor(Math.random() * (12 - 2) + 2);
    sum += newCard;
    checkSum(newCard);
}