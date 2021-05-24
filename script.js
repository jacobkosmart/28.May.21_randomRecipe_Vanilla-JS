// quiz question array
const quizData = [{
  question: '1.의학적으로 얼굴과 머리를 구분하는 기준은 어디일까요?',
  a: '코',
  b: '눈썹',
  c: '귀',
  d: '머리카락',
  correct: 'b'
}, {
  question: '2.다음 중 바다가 아닌 곳은?',
  a: '카리브해',
  b: '오호츠크해',
  c: '사해',
  d: '지중해',
  correct: 'c'
}, {
  question: '3.심청이의 아버지 심봉사의 이름은?',
  a: '심전도',
  b: '심학규',
  c: '심한길',
  d: '심은하',
  correct: 'b'
}, {
  question: '4.택시 번호판의 바탕색은?',
  a: '녹색',
  b: '흰색',
  c: '노란색',
  d: '파란색',
  correct: 'c'
}, {
  question: '5.선인장의 가시는 무엇이 변해서 가시가 되었을까요?',
  a: '줄기',
  b: '가지',
  c: '잎',
  d: '꽃',
  correct: 'c'
}];

// HTML DOM getElementById
const answersEls = document.querySelectorAll('.answer');
const quiz = document.getElementById('quiz')
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');



// set index 0 
let currentQuiz = 0;
let score = 0;


function loadQuiz() {

  deselectAnswers();

  const currentQuizData = quizData[currentQuiz]; // set currentQuizData

  // put into HTML from quizData
  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

// execute loadQuiz
loadQuiz();

function getSelected() {

  let answer = undefined;

  answersEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });

  return answer;

}

function deselectAnswers() {
  answersEls.forEach((answerEl) => {
    answerEl.checked = false;
  })
}


// add click btn to change next question
submitBtn.addEventListener('click', () => {
  // check to see the answer
  const answer = getSelected();

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }
    // after clicking, next index in quizData
    currentQuiz++;
    if (currentQuiz < quizData.length) loadQuiz();
    else {
      quiz.innerHTML = `
      <h2>당신의 점수는.. ${score}/${quizData.length} 입니다.</h2>

      <button onclick = "location.reload()">다시 한번더!!</button>
      `
    }
  }
})