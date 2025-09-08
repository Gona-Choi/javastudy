let computerNum = 0;

function randomNum() {
  computerNum = Math.floor(Math.random()*100)+1
  console.log("정답",computerNum)
}

randomNum()

let numberInput = document.getElementById("number-input")
let playButton = document.getElementById("play-button")
let resultArea = document.getElementById("result-area")

playButton.addEventListener("click", play)

function play(){
  let userValue = numberInput.value
  if (computerNum > userValue){
    resultArea.textContent = "Up"
  } 
  else if (computerNum < userValue){
    resultArea.textContent = "Down"
  }
  else{
    resultArea.textContent = "정답입니다"
  }
}