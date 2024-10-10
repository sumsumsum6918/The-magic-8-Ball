const ball = document.querySelector(".outer-shell");
const answerText = document.getElementById("answer-text");
const numberEight = document.querySelector(".text-eight");
const thinkingImage = document.getElementById("Layer_1");
const circleColor = document.querySelector(".inner-shell");

const listOfAnswers = [
  "Ain't Shit",
  "Happier Than Ever",
  "good 4 u",
  "it is certain",
  "Better not tell you now",
  "Very doubtful",
  "Ask again",
];

const questionInput = document.querySelector(".question-input");
questionInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    shakeBall();
  }
});

let intervalId;

function shakeBall() {
  displayNumber();
  const previousintervalId = intervalId;

  if (previousintervalId) {
    clearInterval(previousintervalId);
  }

  ball.classList.add("vibrate-1");

  intervalId = setTimeout(() => {
    stopVibrating();
    const randomNumber = Math.floor(Math.random() * listOfAnswers.length);
    console.log(randomNumber);
    const randomAnswer = listOfAnswers[randomNumber];
    answerText.innerHTML = randomAnswer;
    displayAnswer();
  }, 2000);
}

function stopVibrating() {
  ball.classList.remove("vibrate-1");
}

function displayNumber() {
  numberEight.style.display = "contents";
  answerText.style.display = "none";
  thinkingImage.style.display = "none";
  circleColor.style.backgroundColor = "rgb(255, 255, 255)";
}

function displayAnswer() {
  thinkingImage.style.display = "inline";
  circleColor.style.backgroundColor = " rgb(34, 34, 231)";
  numberEight.style.display = "none";
  answerText.style.display = "contents";
}
