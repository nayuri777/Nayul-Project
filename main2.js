let userInput = document.getElementById('user-num');
let btnGo = document.getElementById("btn-go");
let btnReset = document.getElementById("btn-reset");
let gameResult = document.getElementById("game-result")
let chance = document.getElementById("chance")
let imgArea = document.getElementById("result-img");
let chances = 5;
let gameOver = false;
let history = [];

btnGo.addEventListener("click", play);
btnReset.addEventListener("click", reset);
userInput.addEventListener("focus", function(){
    userInput.value = "";
});

function computerNum(){
    randomNum = Math.floor(Math.random()*100)+1;
    console.log(randomNum)
}

function play(){

   userNum = userInput.value;

   if(userNum > 100 || userNum < 0){
    gameResult.innerText = "1~100사이의 숫자를 입력해 주세요."
    return;
   }else if(userNum == ""){
    gameResult.innerText = "숫자를 입력해 주세요."
    return;
   }

   if(history.includes(userNum)){
    gameResult.innerText = "이미 입력한 숫자 입니다."
    return;
   }
   
   chances --;
   chance.innerText = `기회가 ${chances}번 남았습니다.`


   switch(chances){

    case 4:
        imgArea.src = "no.gif";
    break;

    case 3:
        imgArea.src = "nono.gif"
    break;

    case 2:
        imgArea.src = "dance.gif"
    break;

    case 1:
        imgArea.src = "129.gif"
    break;

    case 0:
        imgArea.src = "zzz.gif"
        gameOver = true;

   }


   if(userNum < randomNum){
    gameResult.innerText = "UP!"
   }else if(userNum > randomNum){
    gameResult.innerText = "Down!"
   }else{
    gameResult.innerText = "That’s right!";
    imgArea.src = "good.gif";
    chance.innerText = "";
    gameOver = true;
   }


   
   history.push(userNum);

   if(gameOver == true){
    btnGo.disabled = true;
   }
}

function reset(){
    computerNum();
    userInput.value = "";
    gameResult.innerText = "숫자를 맞춰봐!"
    chance.innerText = "기회가 5번 남았습니다."
    imgArea.src = "sul.gif";
    chances = 5;
    history = [];
    gameOver = false;
    btnGo.disabled = false;
    
}


computerNum();
