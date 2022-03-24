let age = prompt("enter your age");

if (age < 22) {
    alert("Not allowedd to enter");
} else {
    alert("Entry allowed");
}

let firstcard = getRandomCard();
let secondcard = getRandomCard();

function getRandomCard() {
    let x = Math.floor(Math.random() * 13) + 1; // range (0-12)+1 -> range[1-13]

    if (x === 1) {
        return 11;
    } else if (x >= 11 && x <= 13) {
        return 10;
    }
    return x;
}

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

function renderGame(incomingcard) {
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
        document.querySelector("#play").disabled = true;
    }
}

function playAgain() {
    sum = 0;
    cardsArray = [];

    isOutOfGame = false;
    document.querySelector("#new-card").disabled = false;
    document.querySelector("#play").disabled = false;

    cardsEl.textContent = "Cards: " + cardsArray;
    sumEl.textContent = "Sum: " + sum;
}

function newCard() {
    let newCard = getRandomCard();
    sum += newCard;
    renderGame(newCard);
}