let cardNumber;

const deck = [];

const cards = [
    "bobrossparrot",
    "explodyparrot",
    "fiestaparrot",
    "metalparrot",
    "revertitparrot",
    "tripletsparrot",
    "unicornparrot"
];

let firstCard, secondCard;

let plays = 0;

let corrects = 0;

function verifyCardQuantity() {

    if (cardNumber % 2 !== 0 || cardNumber < 4 || cardNumber > 14 || isNaN(cardNumber)) {

        return true;

    }

    else {

        return false;

    }
}


function cardQuantity() {

    while (verifyCardQuantity()) {

        cardNumber = Number(prompt("Escolha a quantidade de cartas para jogar: "))

    }

    distributeCards();

}
cardQuantity()


function distributeCards() {

    for (let i = 0; i < (cardNumber / 2); i++) {

        let card = cards[i];
        deck.push(card);
        deck.push(card);

    }

    deck.sort(toShuffle);

    showCards()

}

function toShuffle() {

    return Math.random() - 0.5;

}


function showCards() {

    const allCards = document.querySelector('.all-cards');

    for (let i = 0; i < deck.length; i++) {

        let cardTemplate = `
        <li class="card" onclick=turnoverCard(this)>
        <div class="back-face face">
            <img class="back-card" src="./Imagens/${deck[i]}.gif" alt="">
        </div>
        <div class="front-face face">
            <img class="front-card" src="./Imagens/back.png">
        </div>
    </li> 
        `;

        allCards.innerHTML += cardTemplate;

    }
}

function turnoverCard(card) {

    if (card.classList.contains('turnover')) {

        return;

    }

    if (firstCard !== undefined && secondCard !== undefined) {

        return;

    }


    card.classList.add('turnover');
    plays++;

    if (firstCard === undefined) {

        firstCard = card;

    }
    else {

        if (secondCard === undefined) {
            secondCard = card;

            if (firstCard.innerHTML === secondCard.innerHTML) {

                resetCards();

                corrects += 2;

                endGame();
            }
            else {

                setTimeout(hideCards, 1000);

            }
        }
    }
}


function hideCards() {

    firstCard.classList.remove('turnover');

    secondCard.classList.remove('turnover');

    resetCards();
}


function resetCards() {

    firstCard = undefined;
    secondCard = undefined;

}


function endGame() {

    if (corrects === deck.length) {

        alert(`Você ganhou com ${plays} jogadas!`);

    }
}



