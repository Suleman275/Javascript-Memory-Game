// Array = [], Object = {}
// Array has comma seperated list of elements. Object has comma seperated list of attributes
//This is an array of objects
const cardArray = [
    {
        name: "fries",
        img: "images/fries.png"
    },
    {
        name: "cheeseburger",
        img: "images/cheeseburger.png"
    },
    {
        name: "hotdog",
        img: "images/hotdog.png"
    },
    {
        name: "ice-cream",
        img: "images/ice-cream.png"
    },
    {
        name: "milkshake",
        img: "images/milkshake.png"
    },
    {
        name: "pizza",
        img: "images/pizza.png"
    },
    {
        name: "fries",
        img: "images/fries.png"
    },
    {
        name: "cheeseburger",
        img: "images/cheeseburger.png"
    },
    {
        name: "hotdog",
        img: "images/hotdog.png"
    },
    {
        name: "ice-cream",
        img: "images/ice-cream.png"
    },
    {
        name: "milkshake",
        img: "images/milkshake.png"
    },
    {
        name: "pizza",
        img: "images/pizza.png"
    }
]

//This shuffles array //Or you could say that it sorts randomly
cardArray.sort(() => 0.5 - Math.random())

//This gets the element from the html file
const gridDisplay = document.querySelector('#grid')
const resultDisplay = document.querySelector('#result')

let cardsChosen = [] //cards that will be clicked on
let cardsChosenIds = []
const cardsWon = []

function createBoard () {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'images/blank.png')
        card.setAttribute('data-id', i)//what is a data id?
        card.addEventListener('click', flipCard)
        gridDisplay.appendChild(card)
    }
}

createBoard()

function checkMatch () {
    const cards = document.querySelectorAll('#grid img')
    console.log(cards)
    console.log('check for match')

    if (cardsChosenIds[0] == cardsChosenIds[1]) {
        cards[cardsChosenIds[0]].setAttribute('src', 'images/blank.png')
        cards[cardsChosenIds[1]].setAttribute('src', 'images/blank.png')
        alert('You just clicked the same image')
    }
    else if (cardsChosen[0] == cardsChosen[1]){
        alert('You found a match!')
        cards[cardsChosenIds[0]].setAttribute('src', 'images/white.png')
        cards[cardsChosenIds[1]].setAttribute('src', 'images/white.png')
        cards[cardsChosenIds[0]].removeEventListener('click', flipCard)
        cards[cardsChosenIds[1]].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
    }
    else {
        cards[cardsChosenIds[0]].setAttribute('src', 'images/blank.png')
        cards[cardsChosenIds[1]].setAttribute('src', 'images/blank.png')
        alert('No match')
    }

    resultDisplay.innerHTML = cardsWon.length

    cardsChosen = []
    cardsChosenIds = []

    if (cardsWon.length === cardArray.length/2) {
        resultDisplay.innerHTML = 'Congratulations, You found them all'
    }
}

function flipCard () {
    // console.log(cardArray)
    const cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenIds.push(cardId)
    // console.log('clicked card no', cardId)
    console.log(cardsChosen)
    console.log(cardsChosenIds)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length === 2 ) {
        setTimeout(checkMatch, 500)
    }
}
