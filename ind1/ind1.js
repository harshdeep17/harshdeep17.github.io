//alert('hello hd');
//console.log('harsh deep');
function displayTime()
{
    time=new Date();
    document.getElementById('time').innerHTML=time;
}
setInterval(displayTime,1000)
function ageInDays(){
    var birthyear=prompt('what year are you born...good friend?');
    var ageInDayss=(2020-birthyear)*365;
    var h1=document.createElement('h1');
    var textAnswer=document.createTextNode('you are '+ageInDayss+' days old');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
} 
function reset(){
    document.getElementById('flex-box-result').remove();
}
function generateCat(){
    var image=document.createElement('img');
    var div=document.getElementById('flex-cat-gen');
    image.src="cat.jpg";
    div.appendChild(image);
}
function rpsGame(yourChoice){
    console.log(yourChoice);
    var humanChoice,botChoice;
    humanChoice=yourChoice.id;
    botChoice=numberToChoice(randToInt());
    console.log('computerChoice:',botChoice);
    results=decideWinner(humanChoice,botChoice);
    message=finalMessage(results);
    console.log(message);
    rpsFrontEnd(yourChoice.id,botChoice,message);
}
function randToInt(){
    return Math.floor(Math.random()*3);
}
function numberToChoice(number)
{
    return ['rock','paper','scissor'][number];
}
function decideWinner(yourChoice,computerChoice)
{
    var rpsDatabase={
        'rock':{'scissor':1,'rock':0.5,'paper':0},
        'paper':{'rock':1,'paper':0.5,'scissor':0},
        'scissor':{'paper':1,'scissor':0.5,'rock':0}
    };
    var yourScore=rpsDatabase[yourChoice][computerChoice];
    var computerScore=rpsDatabase[computerChoice][yourChoice];
    return [yourScore,computerScore];
}
function finalMessage([yourScore,computerScore])
{
    if(yourScore===0)
    return{'message':'you lost!','color':'red'};
    else if(yourScore===0.5)
    return{'message':'you tied!','color':'yellow'};
    else
    return{'message':'you won!','color':'green'};
}
function rpsFrontEnd(humanImageChoice,botImageChoice,finalMessage){
    var imageDatabase={
        'rock':document.getElementById('rock').src,
        'paper':document.getElementById('paper').src,
        'scissor':document.getElementById('scissor').src
    }
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissor').remove();
    var humanDiv=document.createElement('div');
    var messDiv=document.createElement('div');
    var botDiv=document.createElement('div');
    humanDiv.innerHTML="<img src='"+imageDatabase[humanImageChoice]+"'height=150 width=150 style='box-shadow:0px 10px 50px rgba(37,50,233,1);'>"
    messDiv.innerHTML="<h1 style='color:"+finalMessage['color']+";font-size:60px;padding:30px;'>"+finalMessage['message']+"</h1>"
    botDiv.innerHTML="<img src='"+imageDatabase[botImageChoice]+"'height=150 width=150 style='box-shadow:0px 10px 50px rgba(243,38,24,1);'>"
    document.getElementById('flex-box-rps-div').appendChild(humanDiv);
    document.getElementById('flex-box-rps-div').appendChild(messDiv);
    document.getElementById('flex-box-rps-div').appendChild(botDiv);
}

