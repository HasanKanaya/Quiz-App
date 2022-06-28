let continueBtn = document.querySelector(".shape .bottom .continue");
let qTime = 15;
let headerText = "Quiz App",
  questionText = "HTML Stands for ?",
  firstP = "Habed Tishreen Mark-up Language",
  secondP = "Haber Test Mark-up Language",
  thirdP = "Haber Text Mark-up Language",
  forthP = "Haber Text Moudle Language",
  countQuestion = "1 of 5 Questions";

let content = `<div class="head">
<h2>${headerText}</h2>
<span class="quizTime">Time ${qTime}</span>
</div>
<hr />
<div class="middle">
<h3>${questionText}</h3>
<p class="question">${firstP}</p>
<p class="question">${secondP}</p>
<p class="question correct">${thirdP}</p>
<p class="question">${forthP}</p>
</div>
<hr />
<div class="bottom bottomQuiz">
${countQuestion} <button class="next" disabled>Next</button>
</div>`;

// Make the questions using ES6 by making variables inside each p

// Moving to Quiz App
let hasan = $(content).hide();

continueBtn.addEventListener("click", () => {
  $(".shape hr").fadeOut("normal");
  $(".shape div").fadeOut("normal", function () {
    $(".shape").empty();
  });
  setTimeout(function () {
    $(".shape").append(hasan);
    hasan.fadeIn("normal");
  }, 600);

  // Select Questions
  let countClicker = 0;
  setTimeout(function () {
    let questions = document.querySelectorAll(".shape .middle p.question");
    questions.forEach((e) => {
      e.addEventListener("click", () => {
        if (countClicker >= 1) return;
        countClicker++;
        if (e.classList.contains("correct")) {
          e.classList.add("right");
        } else {
          e.classList.add("wrong");
          document.querySelector("p.correct").classList.add("right");
        }
        $(".next").removeAttr("disabled");
        clearInterval(qTimeInter);
      });
    });
  }, 602);
  // Select Questions

  // Time Per Question
  let qTimeInter = setInterval(() => {
    qTime -= 1;
    if (qTime == 0) {
      document.querySelector(".correct").classList.add("right");
      countClicker++;
      $(".next").removeAttr("disabled");
      clearInterval(qTimeInter);
    }
    document.querySelector(".quizTime").innerHTML = `Time ${qTime}`;
  }, 1000);
  // Time Per Question
});
// Moving to Quiz App

// Moving to the next question

// Moving to the next question
