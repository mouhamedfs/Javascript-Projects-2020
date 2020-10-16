
function ageInDays() {
    let birthYear = prompt('What year were you born budy.. ?');
    let ageinDayss = (2020 - birthYear) *365;
    let h1 = document.createElement('h1');
    let TextAnswer = document.createTextNode('You have  ' + ageinDayss +' Days old.');
    h1.setAttribute('id','ageinDayss');
    h1.appendChild(TextAnswer);
    document.getElementById('flex-box-result').appendChild(h1);

}
function reset() {
    document.getElementById('flex-box-result').remove();
}

//Challenge 2 :

function catGenerator() {
  let image = document.createElement('img');
  let div = document.getElementById('flex-cat-gen');
  image.src="https://cdn2.thecatapi.com/images/29a.jpg";
  div.appendChild(image);
}

//Challenge 3 : Pierre,Papiers,scisseaux

function rpsGame(YourChoice) {
    console.log(YourChoice);
    let humanChoice,botChoice;
    humanChoice = YourChoice.id;
    botChoice= numberToChoice(randToRpsInt());
    console.log('Computerchoice:',botChoice);
    let results = decideWinner(humanChoice,botChoice);
    console.log(results);
    let message = finalMessage(results);
    console.log(message);
    rpsFrontEnd(YourChoice.id,botChoice,message);
}

function randToRpsInt() {
    return Math.floor(Math.random()*3);
}
function numberToChoice(number) {
    return ['rock','paper','scissors'][number];
}

function decideWinner(YourChoice,computerChoice) {
    let rpsDatabase = {'rock':{'scissors':1,'rock':0.5,'paper':0},
                        'scissors':{'paper':1,'scissors':0.5,'rock':0},
                        'paper':{'rock':1,'paper':0.5,'scissors':0}
                        };
    let yourScore = rpsDatabase[YourChoice][computerChoice];
    let computerScore = rpsDatabase[computerChoice][YourChoice];

    return [yourScore,computerScore];


}

function finalMessage([yourScore,computerScore]) {
    if(yourScore === 0){
        return {'message':'You Lost!','color':'red'};
    }else if(yourScore ===0.5){
        return {'message':'You Tied','color':'yellow'};
    }else
        return {'message':'You Win!','color':'green'};
}

function rpsFrontEnd(humanImageChoice,botImageChoice,finalMessage) {
    let imageDatabase = {
        'rock':document.getElementById('rock').src,
        'paper':document.getElementById('paper').src,
        'scissors':document.getElementById('scissors').src
    }
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    let humanDiv = document.createElement("div");
    let botDiv = document.createElement("div");
    let messageDiv = document.createElement("div");

    humanDiv.innerHTML = "<img src='"+ imageDatabase[humanImageChoice] + "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(37,50,233,1);'>"
    botDiv.innerHTML = "<img src='"+ imageDatabase[botImageChoice] + "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(243,38,24,1);'>"
    messageDiv.innerHTML = "<h1 style='color: "+finalMessage['color']+";font-size:60px;padding:30px;'>" + finalMessage['message']+"</h1>"
    console.log(finalMessage['message']);
    document.getElementById("flex-box-rps-div").appendChild(humanDiv);
    document.getElementById("flex-box-rps-div").appendChild(messageDiv);
    document.getElementById("flex-box-rps-div").appendChild(botDiv);
}

//Challenge 4 : Change the color of all buttons

let all_buttons = document.getElementsByTagName('button');
console.log(all_buttons);

let copyAllButtons = [];

for(let i = 0;i < all_buttons.length;i++){
    copyAllButtons.push(all_buttons[i]);
    }

function buttonColorChange(buttonThingy) {
    if (buttonThingy.value === 'red') {
        buttonRed();
    } else if (buttonThingy.value === 'green') {
        buttonGreen();
    } else if (buttonThingy.value === 'reset')
    {
        buttonReset();
    }
    else if(buttonThingy.value === 'random')
    {
        randomColors();
    }
}
function buttonRed() {
    for (let i=0;i< all_buttons.length;i++)
    {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-danger');
    }
}

function buttonGreen() {
    for (let i=0;i< all_buttons.length;i++)
    {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-success');
    }
}
function buttonReset() {
    for (let i=0;i< all_buttons.length;i++)
    {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(copyAllButtons[i]);
    }
}

function randomColors() {
    let choicesColor = ['btn-danger','btn-primary','btn-success','btn-warning'];
    for (let i=0;i< all_buttons.length;i++)
    {
        let randomNumber = Math.floor(Math.random()*4);
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(choicesColor[randomNumber]);
    }
}

//Challenge 5 : BlackJack
let blackjackGame  = 
{
    'you': {'scoreSpan':'#your-blackjack-result','div':'#your-box','score':0},
    'dealer':{'scoreSpan':'#dealer-blackjack-result','div':'#dealer-box','score':0},
    'cards': ['2','3','4','5','6','7','8','9','10','K','J','Q','A'],
    'cardMap':{'2':2,'3':3,'4':4,'5':5,'6':6,'7':7,'8':8,'9':9,'10':10,'K':10,'J':10,'Q': 10,'A':[1,11]},
    'wins':0,
    'losses':0,
    'draws':0,
    'isStand': false,
    'turnsOver':false,
};

const YOU = blackjackGame['you']
const  DEALER = blackjackGame['dealer']

const hitSound = new Audio('static/sounds/swish.m4a');
const winSound = new Audio('static/sounds/cash.mp3');
const lossSound = new Audio('static/sounds/aww.mp3');

document.querySelector('#blackjack-hit-button').addEventListener('click',blackjackHit); //remplace onclick()
document.querySelector('#blackjack-stand-button').addEventListener('click',dealerLogic);
document.querySelector('#blackjack-deal-button').addEventListener('click',blackjackDeal);

function blackjackHit() {
    if(blackjackGame['isStand'] === false)
    {
        let cards = randomCards();
        showCard(cards,YOU);
        updateScore(cards,YOU);
        showScore(YOU);

    }
}

function showCard(card,activePlayer) {
    if(activePlayer['score']<=21){
    let cardImage = document.createElement('img');
    cardImage.src= `static/images/${card}.png`;
    document.querySelector(activePlayer['div']).appendChild(cardImage);
    hitSound.play();
    }
}

function randomCards(params) {
    let randomIndex = Math.floor(Math.random()*13);
    return blackjackGame['cards'][randomIndex];
}

function blackjackDeal(params) {

    if(blackjackGame['turnsOver'] === true)
    {
        blackjackGame['isStand'] = false;
        let yourImage = document.querySelector('#your-box').querySelectorAll('img');
        let dealerImage = document.querySelector('#dealer-box').querySelectorAll('img');
        for (let i = 0;i< yourImage.length; i++)
                yourImage[i].remove();   
        for (let i = 0;i< dealerImage.length; i++)
                dealerImage[i].remove();   
        YOU['score'] = 0;
        DEALER['score'] = 0;
        document.querySelector('#your-blackjack-result').textContent = 0;
        document.querySelector('#dealer-blackjack-result').textContent = 0;

        document.querySelector('#your-blackjack-result').style.color = '#ffffff';
        document.querySelector('#dealer-blackjack-result').style.color =  '#ffffff';

        document.querySelector('#blackjack-result').textContent = "Let's Play";
        document.querySelector('#blackjack-result').style.color = 'black';

        blackjackGame['turnsOver'] = true;
    }
}


function updateScore(card,activePlayer) {
    if(card === 'A')
    {
        if(activePlayer['score'] + blackjackGame['cardMap'][card] <=21)
        {
            activePlayer['score'] += blackjackGame['cardMap'][card][1];
        }
        else
        {
            activePlayer['score'] += blackjackGame['cardMap'][card][0];
        }
    }
    else {
    activePlayer['score'] += blackjackGame['cardMap'][card];
    }
}

function showScore(activePlayer) {
    if(activePlayer['score']>21)
    {
        document.querySelector(activePlayer['scoreSpan']).textContent = 'BUST!';
        document.querySelector(activePlayer['scoreSpan']).style.color = 'red';
    }else 
    {
        document.querySelector(activePlayer['scoreSpan']).textContent = activePlayer['score'];
    }
}
function sleep(ms) {
    return new Promise(resolve =>setTimeout(resolve,ms));
}
async function dealerLogic(params) {
    blackjackGame['isStand'] = true;
    while (DEALER['score'] <16 && blackjackGame['isStand'] === true )
    {
        let cards = randomCards();
        showCard(cards,DEALER);
        updateScore(cards,DEALER);
        showScore(DEALER);
        await sleep(1000);
    }
        blackjackGame['turnsOver'] = true;
        let winner = computeWinner();
        showResult(winner);
    }

function computeWinner(params) {
    let winner;
    if(YOU['score'] <=21)
    {
        if(YOU['score']> DEALER['score']|| DEALER['score']>21)
        {
            blackjackGame['wins']++;
            winner = YOU;
        }

    } else if (YOU['score'] < DEALER['score'])
        {
            blackjackGame['losses']++;
            winner = DEALER;
        }
    else if(YOU['score'] === DEALER['score'])
    {
            blackjackGame['draws']++;
    }
    else if(YOU['score'] >21 && DEALER['score'] <=21)
    {
        blackjackGame['losses']++;
        winner = DEALER;
    }
    else if(YOU['score'] >21 && DEALER['score'] >21)
    {
        blackjackGame['draws']++;
    }
    return winner;
}

function showResult(winner) {
    let message,messageColor;

    if(blackjackGame['turnsOver'] === true)
    {
            if(winner === YOU)
        {
            document.querySelector('#wins').textContent = blackjackGame['wins'];
            message = 'You win !';
            messageColor = 'green';
            winSound.play();
        }
        else if (winner === DEALER)
        {
            document.querySelector('#losses').textContent = blackjackGame['losses'];
            message = 'You Lost';
            messageColor = 'red';
            lossSound.play();
        }
        else  
        {
            document.querySelector('#draws').textContent = blackjackGame['draws'];
            message = 'You drew';
            messageColor = 'black';
        }
        document.querySelector('#blackjack-result').textContent = message;
        document.querySelector('#blackjack-result').style.color = messageColor;
    }
}

//Challenge 7 :Ajax & Api with Javascript

const url = 'https://randomuser.me/api?result=10';
fetch(url)
    .then(resp => resp.json())
    .then(data => {
        let authors = data.results;
        console.log(authors);
        for (let i = 0; i < authors.length; i++) {
            let div = document.createElement('div');
            let image = document.createElement('img');
            let p  = document.createElement('p');
            p.appendChild(document.createTextNode(`$title(authors[i].name.first)} $(title(authors[1].name.last)}`));
            image.src = authors[1].picture.large;
            div.appendChild(image);
            div.appendChild(p);
            document.querySelector('.container-6.flex-ajax-row-1').appendChild(div);
        }
    });
