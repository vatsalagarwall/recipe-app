import './App.css';
import axios from 'axios'
import React, {useState, useEffect} from 'react';
import Recipe from './Components/Recipe';

function App() {
  const API_ID = "a873059b"
  const API_KEY = "cdcd4c24f88249b5347c2259a054000d"
  const [recipes,setRecipes] = useState([])
  const [search,setSearch] = useState('')
  const [query,setQuery] = useState('pasta')

  useEffect(()=>{
      console.log("Effect Runs")
      getRecipe();
  },[query])

  const getRecipe = async () => {
      const response = await axios.get(`https://api.edamam.com/search?app_id=${API_ID}&app_key=${API_KEY}&q=${query}`)
      setRecipes(response.data.hits)
      console.log(response.data.hits)
  }

  const updateSearch = (e) =>{
    setSearch(e.target.value)
    console.log(e.target.value)
  }

  const updateQuery = (e) => {
    e.preventDefault();
    setQuery(search)
    setSearch("")
  }
return (
  <div className='App'>
  <header>
    <h1>Recipe App</h1>
    <form onSubmit={updateQuery}>
      <input type='text' value={search} placeholder='Wanna have Pasta?' onChange={updateSearch} className='input-field' />
      <button type='submit' className='search-btn'>Let's Get Cooking</button>
    </form>
  </header>

  <div className='recipe-container'>
    {recipes.map((recipe) => (
      <Recipe
        key={recipe.recipe.label}
        title={recipe.recipe.label}
        calories={recipe.recipe.calories}
        image={recipe.recipe.image}
        ingredients={recipe.recipe.ingredients}
        serves={recipe.recipe.yield}
      />
    ))}
  </div>
</div>)
}

export default App

