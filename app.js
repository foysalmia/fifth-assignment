const searchMeal = () => {
    const searchText = document.getElementById("search-field").value;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayMeal(data.meals))
}
const displayMeal = meals => {
    const mealContainer = document.getElementById("meal-container");

    meals.forEach(meal => {
        const mealDiv = document.createElement('div');
        div.innerHTML =

    })

}