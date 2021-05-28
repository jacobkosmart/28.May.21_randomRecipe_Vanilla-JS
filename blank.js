const meals = document.getElementById("meals")


getRandomMeal();


async function getRandomMeal() {
  const resp = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
  const respData = await resp.json();
  const randomMeal = respData.meals[0];


  addMeal(randomMeal, true);
}

async function getMealById(id) {
  const meal = await fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + id);
}

async function getMealBySearch(term) {
  const meals = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=" + term);
}


function addMeal(mealData, random = false) {

  console.log(mealData)

  const btn = meal.querySelector(".meal-body .fav-btn");

  btn.addEventListener("click", () => {
      if (btn.classList.contains("active")) {
          removeMealLS(mealData.idMeal);
          btn.classList.remove("active");
      } else {
          addMealLS(mealData.idMeal);
          btn.classList.add("active");
      }

      fetchFavMeals();
  });

  meal.addEventListener("click", () => {
      showMealInfo(mealData);
  });

  mealsEl.appendChild(meal);
}


function addMealLS(mealID) {
  const mealIds = getMealsLS();
  
  localStorage.setItem("mealIds", JSON.stringify([...mealIds, mealID]));
}

function removeMealLS(mealID) {
  const mealIds = getMealsLS();
  
  localStorage.setItem("mealIds", JSON.stringify(mealIds.filter(id => id !== mealID)));
}

function getMealsLS() {
  const mealIDs = JSON.parse(localStorage.getItem("mealIds"));
  
  return mealIDs === null ? [] : mealIDs;
}
