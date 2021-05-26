
#  💡 Quiz App (일반상식)


[ Demo](http://quiz1.jacobko.info/)

![quiz](https://user-images.githubusercontent.com/28912774/119346330-0a316f80-bcd5-11eb-8a63-38a7f70b2ca7.gif)



## 💻 1.프로젝트 소개  

### 📝 사용기술 및 언어    

- Vanilla JS
- CSS
- HTML

### ⏰ 개발 기간  
2021-05-17 ~ 24 


## 🗒 2.프로젝트 내용

### 주요 기능

- 객관식 5문제 를 하나씩 풀어서 최종으로 몇개 맟주었는지 스코어 계산하여 출력

- 다시 한번 더 (처음으로 돌아가서) 버튼 클릭 시, 처음 문제로 return 




## 📌 3.주요 코드

```js
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
```

## 4. 느낀점

- 퀴즈 데이터를 여러 함수를 통해 (`loadQuiz()`, `getSelected()`, `deselectAnswers()`) 문제, 정답 의 JS quizdata 를 비교하고 DOM 을 사용해서 HTML 문서에 출력 하는법을 배웠는데, 함수가 여러가지가 작동이되서 코드를 이해하는데 어려움이 있었다.

- 하단부에 버튼을 만들어, click 시 다음페이지 전환 및 score ++ 한다음, 최종 페이지에서 점수를 나타내주었다. => 더 나아가서는 왜 ? 틀렸는지 문제에대한 설명과 몇번 문제가 틀렸는지 알려주는 기능을 학습 후에 추가 할 예정이다.



## Reference

- [Florin Pop](https://www.youtube.com/watch?v=dtKciwk_si4&t=1788s)

- [Design Daily](https://www.uidesigndaily.com/posts/sketch-questionnaire-choice-submit-day-924)

- [Gradient Background colors](https://www.eggradients.com/)