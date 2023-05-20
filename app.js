const computerChoiceDisplay = document.getElementById("computer-choice")
const yourChoice = document.getElementById("your-choice")
const resultDisplay = document.getElementById("result")
const possibleChoices = document.querySelectorAll("button")
const time = document.querySelector('#time')
const scoreElement = document.getElementById('urscore')
const scoreElement2 = document.getElementById('cpuscore')

let userChoice;
let computerChoice;
let result;
let currentTime = 60;
let timerId = null;
let urscore = 0;
let cpuscore = 0;

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {userChoice = e.target.id
yourChoice.innerHTML = userChoice

cpuChoice ()
getResult()
getScore()
}))

function getScore () {
    
        if (result === 'you win!'){
            urscore++;
        scoreElement.innerHTML = urscore;
        } if (result === 'you lose!'){
            cpuscore++;
            scoreElement2.innerHTML = cpuscore;
        }
    
}

function cpuChoice () {
    const randomNumber = Math.floor(Math.random() * 3) +1 // possibleChoices.length
    
    if (randomNumber === 1) {
        computerChoice = "👊"
    }
    if (randomNumber === 2) {
        computerChoice = "✌"
    }
    if (randomNumber === 3) {
        computerChoice = "🖐"
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
    if (computerChoice === userChoice) {
        result = "It's a draw!"
    }
    if (computerChoice === '👊' && userChoice === '🖐') {
        result = 'you win!'
    }
    if (computerChoice === '👊' && userChoice === '✌') {
        result = 'you lose!'
    }
    if (computerChoice === '🖐' && userChoice === '✌') {
        result = 'you win!'
    }
    if (computerChoice === '🖐' && userChoice === '👊') {
        result = 'you lose!'
    }
    if (computerChoice === '✌' && userChoice === '👊') {
        result = 'you win!'
    }
    if (computerChoice === '✌' && userChoice === '🖐') {
        result = 'you lose!'
    }
    resultDisplay.innerHTML = result
}
function countDown(){
    currentTime--
    time.textContent = currentTime

    if (currentTime === 0){
        clearInterval(countDownTimerId)
        clearInterval(timerId)
        if (urscore > cpuscore)(
            alert('GAME OVER! You win the match!')
        ); else if (urscore < cpuscore){
            alert('GAME OVER! You lose the match!')
        }else {
            alert("GAME OVER! It's a draw!")
        }
    }
}
let countDownTimerId = setInterval(countDown, 1000)