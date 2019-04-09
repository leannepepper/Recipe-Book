import React, { Component } from 'react';
import './RecipeCards';
import './App.css';
import RecipeCards from './RecipeCards';

class App extends Component {
state = {
  recipes: [
    {
      name: "Chicken Pesto",
      id: 1,
      ingredients: ['Milk', 'Chicken', 'Pesto', 'Ham'],
      directions: ['step 1', 'step 2', 'step 3']
    },
    {
      name: "Seafood Pasta",
      id: 2,
      ingredients: ['Pasta', 'Fish', 'Butter'],
      directions: ['step 1', 'step 22323', 'step 2133', 'step 86']
    }

  ]
} //End State
prevRecipeId = 2;

// Remove Recipe Function 
handleRemoveRecipe = index => {
  this.setState({
    recipes: [
      ...this.state.recipes.slice(0, index),
      ...this.state.recipes.slice(index + 1)
    ]
  });
};


// Add Recipe Function 
handleAddRecipe = (name, ingredients, directions) => {
  this.setState({
    recipes : [
      {
        name: name, 
        id: (this.prevRecipeId += 1), 
        ingredients: ingredients,
        directions: [directions]
      },
      ...this.state.recipes
    ]
  })
}

  render() {
    return (
      <div className="App">
        <div className="header">
          <h4>Scrumptious</h4>
          <button className="add-btn">+ Add</button>
        </div>
        <div className="hero">
          <h1>Scrumptious</h1>
          <button className="random-btn">What's for dinner? Who cares!</button>
        </div>
   
        <main>
          <RecipeCards recipes={this.state.recipes}
          handleRemoveRecipe={this.handleRemoveRecipe}
           />
        </main>
      </div>
    );
  }
}

export default App;
