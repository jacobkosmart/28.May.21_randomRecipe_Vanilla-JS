
#  🍚 Recipe App 


[Demo](http://recipe.jacobko.info/)


<img src = "https://user-images.githubusercontent.com/28912774/119988494-239e2880-c001-11eb-8607-0722c2ceca86.gif" width ="300" /> <img src = "https://user-images.githubusercontent.com/28912774/119988501-24cf5580-c001-11eb-85ef-80084b7df5a2.gif" width ="300" />


## 💻 1.프로젝트 소개  

### 📝 사용기술 및 언어    

- Vanilla JS
- CSS
- HTML

### ⏰ 개발 기간  
2021-05-19 ~ 2021-05-28


## 🗒 2.프로젝트 내용

### 주요 기능

- mobile frame 에 맞게 app 제작

- The maal DB 의 random recipe 출력

- 좋아요 버튼을 누르면 favorite meals 에 추가 

- recipe 클릭 시, 상세 정보 출력 (`youtube`, `ingredients`, `details`)

- 검색창에 (예: rice) 입력 시, 해당되는 recipe 검색됨




## 📌 3.주요 코드

### 1. API 연결

- 비동기 (async, await 을 통해서 getRandomMeal, getMealById, getMEalBySerch) 를 retun 함

```js
async function getRandomMeal() {
  const resp = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
  const respData = await resp.json();
  const randomMeal = respData.meals[0];

  console.log(randomMeal)

  addMeal(randomMeal, true);
}

async function getMealById(id) {
  const resp = await fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + id);

  const respData = await resp.json();

  const meal = respData.meals[0];

  return meal
}

async function getMealBySearch(term) {
  const resp = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=" + term);

  const respData = await resp.json();
  const meals = respData.meals;

  return meals;
}
```

### 2. favorite Meals

- like  버튼을 누르면 favorite 창에 메뉴 추가 하기

```js
function addMealFav(mealData) {

  const favMeal = document.createElement("li");

  favMeal.innerHTML = `
    <img src="${mealData.strMealThumb}" alt="${mealData.strMeal}">
    <span>${mealData.strMeal}</span>
    <button class= "clear"><i class="fas fa-window-close"></i></button>
  `;

  const btn = favMeal.querySelector('.clear');

  btn.addEventListener('click', () => {
    removeMealLS(mealData.idMeal);

    fetchFavMeals();
  });

  favMeal.addEventListener('click', () => {
    showMealInfo(mealData);
  });

```

### 3. recipe information modal 

- modal 창으로 youtube, ingredients, details 등을 API 로 부터 가져와서 해당 정보를 return

- JS 정규식을 통해서 해당 youtube URL 에서 해당되는 ID 부분만 `match()`를 사용하여 return

```js

function showMealInfo(mealData) {
  // clean it up

  mealInfoEl.innerHTML = '';

  // update the Meal info
  const mealEl = document.createElement('div');

  const ingredients = [];

  // get ingredients and measures
  for(let i=1; i<=20; i++) {
    if(mealData['strIngredient' + i]) {
      ingredients.push(`${mealData['strIngredient' + i]} - ${mealData['strMeasure' + i]}`)
    } else {
      break;
    }
  }

  // JS regular expressions (get ID)
  const youtubeEl = mealData.strYoutube
  const selectURL = youtubeEl.match(/(?<=\=).{1,}/g)

  mealEl.innerHTML = `
    <h1>${mealData.strMeal}</h1>
    <iframe class="video-wrap" width="100%" height="315" src="https://www.youtube.com/embed/${selectURL}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <h3>Ingredients: </h3>
    <ul>
      ${ingredients.map(ing => `<li>${ing}</li>`).join('')}
    </ul>
    <p>${mealData.strInstructions}</p>
    <img src="${mealData.strMealThumb}" alt="">
  `

  mealInfoEl.appendChild(mealEl);

  // show the popup
  mealPopup.classList.remove('hidden')
}
```


## 4. 느낀점

- 비동기 관련 외부 API와 연결 관련해서 Json 이라던지, 비동기 관련 학습량 과 에러 코드가 부분이 많아서 어려움을 느낌

- 함수가 정리가 되지 않아 나중에 clean code 를 통해 js 파일 refactoring 필요성 있음

- HTML 코드를 주로 JS  에서 innerHTML 을 통해서 작성 하는 것에 대해서 익숙하지가 않아 API 에서 data를 가져 올 경우 많이 사용되기 때문에, 더 많은 연습이 필요 할 거 같음

- 개선 사항:

    - 브라우저 test 시, 아이폰, 아이패드 환경에서 구동이 잘 안되는것 확인됨 (왜 안되는지 추후 개선 예정)

    - 다음 random 이미지 return 시 runtime이 생각보다 오래 걸려서 코드 최적화를 통한 구동 속도 향상 필요



- font awsome 사용 <i class="fa fa-heart"></i> 관련 내용 링크 추가


## Reference

- [Florin Pop](https://www.youtube.com/watch?v=dtKciwk_si4&t=4697s)

- [Design Daily](https://www.uidesigndaily.com/posts/sketch-recipe-app-food-mobile-day-615)

- [Gradient Background colors](https://www.eggradients.com/)

- [The Meal API](https://www.themealdb.com/api.php)

- [font-awesome](https://cdnjs.com/libraries/font-awesome)





