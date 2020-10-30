'use strict';
var scores, totalscore, activeP, gamePlaying;


function init(){
    scores = [0,0]; 
    totalscore = 0;
    activeP = 0;
    gamePlaying = true;
    document.getElementById('score--0').textContent = '0';
    document.getElementById('score--1').textContent = '0';
    document.getElementById('current--0').textContent = '0';
    document.getElementById('current--1').textContent = '0';
    document.getElementById('name--0').textContent = 'Player 1';
    document.getElementById('name--1').textContent = 'Player 2';
    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.player--0').classList.remove('player--winner');
    document.querySelector('.player--1').classList.remove('player--winner');
    document.querySelector('.player--0').classList.remove('player--active');
    document.querySelector('.player--1').classList.remove('player--active');
    document.querySelector('.player--0').classList.add('player--active');

}
//console.log(dice);
init();
//document.querySelector('#current--'+ activeP).textContent = dice;


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
    if(gamePlaying){
        var dice = Math.floor(Math.random()*6) + 1;
    //display dice
        var diceDOM = document.querySelector('.dice'); 
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-'+ dice + '.png'; 

        // update total
        if(dice !== 1){
            totalscore += dice;
            document.querySelector('#current--'+ activeP).textContent = totalscore;
            //document.querySelector('#score--'+ activeP).textContent = totalscore;
        // document.querySelector('#current--'+ activeP).textContent = totalscore;

        }else {
            next();
        }
    }
    
});

document.querySelector('.btn--hold').addEventListener('click', function(){
    // add curr to total
    if(gamePlaying){
        scores[activeP] += totalscore;
    
    // update ui
    document.querySelector('#score--'+activeP).textContent = scores[activeP];

    // check if any won
    if(scores[activeP] >= 10){
        document.getElementById('name--'+activeP).textContent = 'Winner';
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.player--'+ activeP).classList.add('player--winner');
        document.querySelector('.player--'+ activeP).classList.remove('player--active');
        gamePlaying = false;
    }
    else{
        next();
    }
    }

    //next();
});

document.querySelector('.btn--new').addEventListener('click', init);
