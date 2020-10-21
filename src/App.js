import { queryAllByAltText } from '@testing-library/react';
import React, { useEffect, useState } from 'react';
import './App.css';
import Recipe from './components/Recipe'

const APP_ID = "a9b1c838"
const APP_KEY = "361c445f0ed3f4c313ee943d9054c125"

function App() {

  const [ counter, setCounter ] = useState(0)
  const [ recipes, setRecipes ] = useState([])
  const [ input, setInput ] = useState('')
  const [ query, setQuery ] = useState('chicken')

  useEffect(() => {
    getRecipes();
  }, [query])

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await response.json()
    setRecipes(data.hits)
    console.log(data.hits)
  }

  const getSearch = e => {
    e.preventDefault()
    setQuery(input)
    setInput('')
  }

  return (
    <div className="app">
      <form onSubmit={getSearch} className="search">
        <input className="search__input" value={input} onChange={e => setInput(e.target.value)} type="text"/>
        <button className="search__button" type="submit">
          Search
        </button>
      </form>
      {recipes.map( ({recipe}) => (
        <Recipe
          key={recipe.label} 
          title={recipe.label} 
          image={recipe.image} 
          cal={recipe.totalWeight}/>
      ))}
    </div>
  );
}

export default App;
