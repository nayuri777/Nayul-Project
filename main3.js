let inputUser = document.getElementById("user-num");
let btnGo = document.getElementById("game-go");
let btnReset = document.getElementById("game-reset");
let gameResult = document.querySelector(".result");
let chance = document.querySelector(".chance");
let gameOver = false;
let chances = 5;
let history = [];


btnGo.addEventListener("click", play);
btnReset.addEventListener("click",reset);
inputUser.addEventListener("focus", function(){
    inputUser.value = "";
});



function computerNum(){
    randomNum = Math.floor(Math.random()*100)+1;
    console.log(randomNum);
}

function play(){
    
    let userNum = inputUser.value;

    if(userNum < 1 || userNum > 100){
        gameResult.innerText = "1~100까지 수를 입력하세요";
        return;
    }

    if(history.includes(userNum)){
        gameResult.innerText = "이미 입력한 숫자입니다."
        return;
    }

    chances --;
    chance.innerText = `기회가 ${chances}번 남았습니다`
    

    if(userNum < randomNum){
        gameResult.innerText = "up";
    }else if(userNum > randomNum){
        gameResult.innerText = "down";
    }else{
        gameResult.innerText = "정답";
        gameOver = true;
    }

    history.push(userNum);

    if(chances < 1){
        gameOver = true;
        gameResult.innerText = "기회가 모두 끝났습니다."
    }

    if(gameOver == true){
        btnGo.disabled = true;
    }
}

function reset(){
    chances = 5;
    history = [];
    gameOver = false;
    btnGo.disabled = false;
    inputUser.value = "";
    chance.innerText = "기회가 5번 남았습니다."
    computerNum();
}

computerNum();