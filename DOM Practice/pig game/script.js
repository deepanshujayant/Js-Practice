'use strict';
var scores, totalscore, activeP;
scores = [0,0];
totalscore = 0;
activeP = 0;

//console.log(dice);

//document.querySelector('#current--'+ activeP).textContent = dice;
document.getElementById('score--0').textContent = '0';
document.getElementById('score--1').textContent = '0';
document.getElementById('current--0').textContent = '0';
document.getElementById('current--1').textContent = '0';

document.querySelector('.dice').style.display = 'none';

function next(){
    activeP  === 0 ? activeP = 1 : activeP = 0;
        totalscore = 0;
        document.getElementById('current--0').textContent = '0';
        document.getElementById('current--1').textContent = '0';
        //document.getElementById('score--0').textContent = '0';
        //document.getElementById('score--1').textContent = '0';

        document.querySelector('.player--0').classList.toggle('player--active');
        document.querySelector('.player--1').classList.toggle('player--active');
        
        document.querySelector('.dice').style.display = 'none';
    
}

document.querySelector('.btn--roll').addEventListener('click', function(){
    //random num
    var dice = Math.floor(Math.random()*6) + 1;
    //display dice
    var diceDOM = document.querySelector('.dice'); 
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-'+ dice + '.png'; 

    // update total
    if(dice !== 1){
        totalscore += dice;
        document.querySelector('#current--'+ activeP).textContent = totalscore;
        document.querySelector('#score--'+ activeP).textContent = totalscore;
       // document.querySelector('#current--'+ activeP).textContent = totalscore;

    }else {
        next();
    }
})

document.querySelector('.btn--hold').addEventListener('click', function(){
    // add curr to total
    scores[activeP] += totalscore;
    
    // update ui
    document.querySelector('#score--'+activeP).textContent = scores[activeP];

    // check if any won
    if(scores[activeP] >= 10){
        document.getElementById('name--'+activeP).textContent = 'Winner';
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.player--'+ activeP).classList.add('player--winner');
        document.querySelector('.player--'+ activeP).classList.remove('player--active');
    }
    else{
        next();
    }

    //next();
})

