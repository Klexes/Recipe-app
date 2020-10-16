import React, { useEffect, useState } from 'react';
import './App.css';
import Recipe from './components/Recipe'

const APP_ID = "a9b1c838"
const APP_KEY = "361c445f0ed3f4c313ee943d9054c125"

function App() {

  const [ counter, setCounter ] = useState(0)
  const [ recipes, setRecipes ] = useState([])

  useEffect(() => {
    getRecipes();
  }, [])

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await response.json()
    setRecipes(data.hits)
    console.log(data.hits)
  }

  return (
    <div className="app">
      <form className="search">
        <input className="search__input" type="text"/>
        <button className="search__button" type="submit">
          Search
        </button>
      </form>
      {recipes.map( ({recipe}) => (
        <Recipe title={recipe.label} image={recipe.image} cal={recipe.totalWeight}/>
      ))}
    </div>
  );
}

export default App;
