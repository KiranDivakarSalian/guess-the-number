// console.log(document.querySelector('.number').textContent)

console.log(document.querySelector('.message').textContent)

// document.querySelector('.message').textContent='correct number'

// document.querySelector('.number').textContent=10

// document.querySelector('.guess').value=5

// console.log(document.querySelector('.guess').textContent)


let secretNumber=Math.trunc(Math.random()*20)+1
console.log(secretNumber)    
let score=20;
let highScore=0;
const displayMessage=function(message)
{
    document.querySelector('.message').textContent=message
}
document.querySelector('.check').addEventListener('click',function(){
    const guess=Number(document.querySelector('.guess').value) 
    console.log(guess,typeof(guess),secretNumber)
    if(!guess)
    {
        // document.querySelector('.message').textContent='no number'
        displayMessage('no number')
    }
    else if(guess===secretNumber)
    {
        // document.querySelector('.message').textContent='correct number'
        displayMessage('correct number')
        document.querySelector('body').style.backgroundColor='#60b347';
        document.querySelector('.number').textContent=secretNumber;
        document.querySelector('.number').style.width='30rem'
        if(score>highScore)
        {
            highScore=score
            document.querySelector('.highscore').textContent=highScore
        }
    }
    // else if(guess>secretNumber)
    // {
    //     if(score>1)
    //     {
    //         document.querySelector('.message').textContent='too high'
    //         score--
    //         document.querySelector('.score').textContent=score
    //     }
    //     else{
    //         document.querySelector('.message').textContent='you lost the game'
    //         document.querySelector('.score').textContent=0
    //     }
    // }
    // else if(guess<secretNumber)
    //     {
    //         if(score>1)
    //         {
    //             document.querySelector('.message').textContent='too low'
    //             score--
    //             document.querySelector('.score').textContent=score
    //         }
    //         else{
    //             document.querySelector('.message').textContent='you lost the game'
    //             document.querySelector('.score').textContent=0
    //         }
    //     }
    else if(guess!==secretNumber)
    {
        if(score>1)
        {
                // document.querySelector('.message').textContent=guess>secretNumber?document.querySelector('.message').textContent='too high':document.querySelector('.message').textContent='too low'
                guess>secretNumber?displayMessage('too high'):displayMessage('too low')
                score--
             document.querySelector('.score').textContent=score
        }
             else{
                // document.querySelector('.message').textContent='you lost the game'
                displayMessage('you lost the game')
                document.querySelector('.score').textContent=0
                      }

        }
})

document.querySelector('.btn').addEventListener('click',function(){
    score=20
    secretNumber=Math.trunc(Math.random()*20)+1
    // document.querySelector('.message').textContent='startguessing'
    displayMessage('start guessing')
    document.querySelector('.score').textContent=score
    document.querySelector('.number').textContent='?';
    document.querySelector('.guess').value=''
    document.querySelector('body').style.backgroundColor='#222';
    document.querySelector('.number').style.width='15rem'
    console.log(secretNumber)
})
