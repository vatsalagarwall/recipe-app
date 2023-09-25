import React from 'react'
import { useState } from 'react';

function Main() {
//   const [foodname, setFoodname] = useState('');
  const [recipeName, setRecipeName] = useState('');
  const [recipeSteps, setRecipeSteps] = useState('');

const recipesearch = () => {
    // const API_ID = "a873059b"
    // const API_KEY = "cdcd4c24f88249b5347c2259a054000d"
        const inputElement = document.getElementsByClassName("foodInput")[0];
        const foodname = inputElement.value;
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${foodname}`;
       fetch(url)
       .then((response)=>response.json())
       .then((data)=>{
        const recipe = data.meals[0];
        
        if(recipe){
            setRecipeName(recipe.strMeal)
            setRecipeSteps(recipe.strInstructions)
        }
        else{
            setRecipeName("Recipe not found")
            setRecipeSteps("")
        }
       })
       .catch((error)=>{
        console.log("Data not found",error)
       })
}

  return (
    <div>
        <input type="text" className="foodInput" placeholder='Search' />
        <button onClick={recipesearch}>Search</button>
        <div className='recipe-name'>Name: {recipeName}</div>
        <div className='recipe-steps'>Steps: {recipeSteps}</div>
    </div>
  )
}

export default Main