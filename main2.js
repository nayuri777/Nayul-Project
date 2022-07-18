//컴퓨터는 게임이 시작할때 랜덤한 숫자를 뽑는다
//유저는 숫자를 입력할 수 있다
//유저가 입력한 숫자가 컴퓨터가 뽑은 숫자보다 작으면 Up! 이라고 알려준다
//유저가 입력한 숫자가 컴퓨터가 뽑은 숫자보다 크면 Down! 이라고 알려준다
//유저가 입력한 숫자가 컴퓨터가 뽑은 숫자와 일치하다면 That's right이라고 뜨고 게임이 종료된다.
//유저는 총 5번의 기회가 있다
//게임이 종료되면 버튼은 비활성화된다
//리셋버튼을 누르면 게임이 초기화된다
//유저가 1~100범위 밖에 숫자를 입력할시에 경고메세지가 뜬다
//유저가 이미 입력한 값을 또 입력할 시에 경고메세지가 뜬다

let computerNum = 0;
let userNum = document.getElementById("user-number");
let resultArea = document.getElementById("result-area");
let buttonGo = document.getElementById("button-go");
let chancesArea = document.getElementById("chances-area");
let buttonReset = document.getElementById("button-reset");
let gameOver = false;
let chances = 5;
let history = [];

buttonGo.addEventListener("click", play);
buttonReset.addEventListener("click", reset);
userNum.addEventListener("focus", function(){
    userNum.value = "";
});



function pickRandomNum(){
    computerNum = Math.floor(Math.random()*100)+1;
    console.log(computerNum);
}

function play(){
    let userValue = userNum.value;

    if(userValue > 100 || userValue < 1 ){
        resultArea.textContent = "1부터 100사이의 수를 입력하세요"
        return;
    }

    if(history.includes(userValue)){
        resultArea.textContent = "이미 입력한 숫자입니다."
        return;
    }


    chances --;
    chancesArea.textContent = `기회가 ${chances}번 남았습니다.`
    
    if(userValue < computerNum){
        resultArea.textContent = "up!"
    }else if(userValue > computerNum){
        resultArea.textContent = "down!!"
    }else{
        resultArea.textContent = "정답입니다!"
        gameOver = true;
    }
    
    history = userValue;

    

    if(chances < 1){
        resultArea.textContent = "기회가 없습니다."
        gameOver = true;
    }

    if(gameOver == true){
        buttonGo.disabled = true;
    }

}

function reset(){
    buttonGo.disabled = false;
    history = [];
    chances = 5;
    userNum.value = "";
    resultArea.textContent = "결과가 이곳에 나옵니다."
    chancesArea.textContent = "기회가 5번 남았습니다"
    pickRandomNum();
}



pickRandomNum();