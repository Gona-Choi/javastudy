

function randomNum() {
  computerNum = Math.floor(Math.random()*100)+1
  console.log("정답",computerNum)
}



let computerNum = 0;
let numberInput = document.getElementById("number-input")
let playButton = document.getElementById("play-button")
let resultArea = document.getElementById("result-area")
let resetArea = document.getElementById("reset-area")
let resultImg = document.querySelector(".main-img")
let chances = 5
let gameOver = false
let chanceArea = document.getElementById("chance-area")
let history = []

playButton.addEventListener("click", play)
resetArea.addEventListener("click", reset)
numberInput.addEventListener("focus", function(){
  numberInput.value = ""; //여기서 바로 사용, 익명의 함수 사용 가능, 반복 X
})

function play(){
  let userValue = numberInput.value

  if (userValue<1 || userValue>100){
    resultImg.src = "https://i.pinimg.com/474x/ab/c3/05/abc3051429f4f1c0ad418bfe1deee543.jpg"
    resultArea.textContent = "1부터 100까지 사이의 숫자를 입력하세요"
    return;}

  if (history.includes(userValue)){
    resultImg.src = "https://i.pinimg.com/474x/ab/c3/05/abc3051429f4f1c0ad418bfe1deee543.jpg"
    resultArea.textContent = "이미 입력한 숫자입니다. 다른 숫자를 입력해 주세요"
    return
  }

  chances --;
  chanceArea.textContent = `남은기회:${chances}번`
  
  if (computerNum > userValue){
    resultImg.src = "https://www.hollywoodinsider.com/wp-content/uploads/2021/10/The-Hollywood-Insider-Up-Tribute-Pixar.png"
    resultArea.textContent = "Up"
  } 
  else if (computerNum < userValue){
    resultArea.textContent = "Down"
    resultImg.src = "https://h7.alamy.com/comp/2M8FN1C/thumbs-down-man-and-studio-portrait-white-background-and-isolated-for-wrong-sign-poor-review-or-body-language-disappointed-guy-hands-and-bad-2M8FN1C.jpg"
  }
  else{
    resultArea.textContent = "정답입니다"
    gameOver = true
    resultImg.src = "https://westart.or.kr/wp-content/uploads/2016/11/%EC%87%BC%EC%83%9D%ED%81%AC%ED%83%88%EC%B6%9C4.jpg"
  }
  
  history.push(userValue)

  
  if (chances<1){
    gameOver = true
  }

  if (gameOver == true){
    playButton.disabled = true
  }
}

function focusInput(){
  numberInput.value = "";
}

function reset(){
  randomNum()
  numberInput.value = ""
  playButton.disabled = false
  gameOver = false
  chances = 5
  chanceArea.textContent = `남은기회:${chances}번`
  history = []
  resultImg.src = "https://i.namu.wiki/i/HPX6T8SGrWLsUfoUsK11JyM6aloLVTYHwJQtiCH7JLzpAu0F_uuiqj8UPUC6SQYJVaIZxcunov_Lux5Ng3lwBkyW0kL0hjAi2f-l5KYk5wN6JV236lKxL6_PWBMn2zwBeoCaOpcvxu1dxl5d8zA1PQ.webp"

  

  resultArea.textContent = "결과값이 여기 나옵니다."
}

randomNum()