
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
