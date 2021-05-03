document.getElementById('searchBtn').addEventListener('click', function(){
    const input = document.getElementById('searchArea').value;
    url = `https://www.themealdb.com/api/json/v1/1/search.php?f=${input}`;
    fetch(url)
    .then(res => res.json())
    .then(data => MealCollection(data))
    .catch(err => alert('Sorry! No Item Found'));
})

const MealCollection = foods => { 
    food = foods.meals;
    const mealDiv = document.getElementById('mealItems');
    for (let i = 0; i < food.length; i++) {
        const creatDiv = document.createElement('div');
        const meals = food[i];
        creatDiv.className = 'allMeals'
        const mealInfo = `
        <section onclick = 'mealItemInfo("${meals.idMeal}")'>
        <img class ="mealImage" src = "${meals.strMealThumb}">
        <h2>${meals.strMeal}</h2>
        </section>`;
    creatDiv.innerHTML = mealInfo;
    mealDiv.appendChild(creatDiv);
    }
}

const mealItemInfo = meal => {
    url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meal}`;
    fetch(url)
    .then(res => res.json())
    .then(data => mealInfoDetail(data));
}

const mealInfoDetail = mealInfo => {
    const mealIng = mealInfo.meals;
    const mealInfoDiv = document.getElementById('mealItemsInfo');
    for (let i = 0; i < mealIng.length; i++) {
        const creatMealDiv = document.createElement('div');
        const mealInfo = mealIng[i];
        const mealInfoDetail = `
            <img class ="mealImage" src="${mealInfo.strMealThumb}">
            <h1>${mealInfo.strMeal}</h1>
            <h3>Ingredients</h3>
            <p>${mealInfo.strIngredient1}</p>
            <p>${mealInfo.strIngredient2}</p>
            <p>${mealInfo.strIngredient3}</p>
            <p>${mealInfo.strIngredient4}</p>
            <p>${mealInfo.strIngredient5}</p>
            <p>${mealInfo.strIngredient6}</p>
        `;
        creatMealDiv.innerHTML = mealInfoDetail;
        mealInfoDiv.appendChild(creatMealDiv);
    }
}