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

// Select Opction
function selectFromQuestions() {
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
}
// Select Opction

// Creating The Shape
function creatingShape() {
  let hasan = $(content).hide();
  $(".shape hr").fadeOut("normal");
  $(".shape div").fadeOut("normal", function () {
    $(".shape").empty();
  });
  setTimeout(function () {
    $(".shape").append(hasan);
    hasan.fadeIn("normal");
  }, 600);
}
// Creating The Shape

continueBtn.addEventListener("click", () => {
  creatingShape();
  selectFromQuestions();

  // Next Button
  setTimeout(() => {
    document.querySelector(".next").addEventListener("click", function () {
      qTime = 15;
      questionText = "Choose The Semantic Element";
      firstP = "h2";
      secondP = "a";
      thirdP = "div";
      forthP = "header";
      countQuestion = "2 of 5 Questions";
      content = `<div class="head">
<h2>${headerText}</h2>
<span class="quizTime">Time ${qTime}</span>
</div>
<hr />
<div class="middle">
<h3>${questionText}</h3>
<p class="question">${firstP}</p>
<p class="question">${secondP}</p>
<p class="question">${thirdP}</p>
<p class="question correct">${forthP}</p>
</div>
<hr />
<div class="bottom bottomQuiz">
${countQuestion} <button class="next" disabled>Next</button>
</div>`;

      creatingShape();
      selectFromQuestions();

      setTimeout(() => {
        document.querySelector(".next").addEventListener("click", function () {
          qTime = 15;
          questionText = "Choose The Smallest Heading Tag";
          firstP = "h5";
          secondP = "h4";
          thirdP = "h1";
          forthP = "none of the above";
          countQuestion = "3 of 5 Questions";
          content = `<div class="head">
    <h2>${headerText}</h2>
    <span class="quizTime">Time ${qTime}</span>
    </div>
    <hr />
    <div class="middle">
    <h3>${questionText}</h3>
    <p class="question">${firstP}</p>
    <p class="question">${secondP}</p>
    <p class="question">${thirdP}</p>
    <p class="question correct">${forthP}</p>
    </div>
    <hr />
    <div class="bottom bottomQuiz">
    ${countQuestion} <button class="next" disabled>Next</button>
    </div>`;

          creatingShape();
          selectFromQuestions();
          setTimeout(() => {
            document
              .querySelector(".next")
              .addEventListener("click", function () {
                qTime = 15;
                questionText = "How To Make A New Line";
                firstP = "br";
                secondP = "New Line";
                forthP = "nl";
                thirdP = "hr";
                countQuestion = "4 of 5 Questions";
                content = `<div class="head">
        <h2>${headerText}</h2>
        <span class="quizTime">Time ${qTime}</span>
        </div>
        <hr />
        <div class="middle">
        <h3>${questionText}</h3>
        <p class="question correct">${firstP}</p>
        <p class="question">${secondP}</p>
        <p class="question">${thirdP}</p>
        <p class="question">${forthP}</p>
        </div>
        <hr />
        <div class="bottom bottomQuiz">
        ${countQuestion} <button class="next" disabled>Next</button>
        </div>`;
                creatingShape();
                selectFromQuestions();
                setTimeout(() => {
                  document
                    .querySelector(".next")
                    .addEventListener("click", function () {
                      qTime = 15;
                      questionText = "Best Way To Become a Developer";
                      firstP = "Watch videos or read books";
                      secondP = "Listen from hasan kanaya";
                      forthP = "All of the above";
                      thirdP = "build a lot of projects";
                      countQuestion = "5 of 5 Questions";
                      content = `<div class="head">
              <h2>${headerText}</h2>
              <span class="quizTime">Time ${qTime}</span>
              </div>
              <hr />
              <div class="middle">
              <h3>${questionText}</h3>
              <p class="question">${firstP}</p>
              <p class="question">${secondP}</p>
              <p class="question">${thirdP}</p>
              <p class="question correct">${forthP}</p>
              </div>
              <hr />
              <div class="bottom bottomQuiz">
              ${countQuestion} <button class="next" disabled>Next</button>
              </div>`;
                      creatingShape();
                      selectFromQuestions();
                    });
                }, 602);
              });
          }, 602);
        });
      }, 602);
    });
  }, 602);
  // Next Button
});
