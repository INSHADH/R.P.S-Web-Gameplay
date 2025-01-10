const score = JSON.parse(localStorage.getItem('score')) || { 
  wins : 0,
  lose : 0,
  tie  :0
};
const scorebord =document.querySelector('.scorebord');

function result(userSelection)
{
let comphand = searchrandno();
let result;
if(comphand===userSelection)
{
result='TIE';  
score.tie += 1 ;
} 
else if(comphand==='sissor')
{
if(userSelection==='paper')
{
result = 'LOSE'
score.lose += 1 ;

}
else{

result = 'WON'
score.wins += 1 ;

}
} 
else if(comphand==='paper')
{
if(userSelection==='rock')
{
result = 'LOSE'
score.lose += 1 ;

}
else{

result = 'WON'
score.wins += 1 ;

}
} 
else 
{
if(userSelection==='sissor')
{
result = 'LOSE'
score.lose += 1 ;

}
else{

result = 'WON'
score.wins += 1 ;

}
} 
localStorage.setItem('score',JSON.stringify(score) );

document.querySelector('.livegame').innerHTML=`You : <img src="images/${userSelection}-emoji.png" alt="rock" class = "iconlogo"> <img src="images/${comphand}-emoji.png" alt="rock" class = "iconlogo"> :Bot`;
document.querySelector('.result').innerHTML=`${result}`;
scorebord.innerHTML=`  Win : ${score.wins}  Lose : ${score.lose}  Tie : ${score.tie}`;
}

function searchrandno()
{
let comphand;
const randNo=Math.random();
console.log(randNo);
if(randNo>= 0 && randNo< 1/3)
{
comphand='rock';  
} 
else if(randNo>=1/3 && randNo<2/3)
{
comphand='sissor';  
} 
else 
{
comphand='paper';  
} 
return(comphand)
}

function resetgame()
{
score.wins=0;
score.lose=0;
score.tie=0;
localStorage.removeItem(score)
alert('scores are reseted')
document.querySelector('.livegame').innerHTML=``;
document.querySelector('.result').innerHTML=``;
scorebord.innerHTML =` Win : ${score.wins}  Lose : ${score.lose}  Tie : ${score.tie}`;
}