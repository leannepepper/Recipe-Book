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
      ingredients: ['milk', 'chicken', 'pesto'],
      directions: ['step 1', 'step 2', 'step 3']
    }

  ]
} //End State
prevRecipeId = 2;

handleAddRecipe = (name, ingredients, directions) => {
  this.setState({
    recipes : [
      {
        name: name, 
        id: (this.prevRecipeId += 1), 
        ingredients: [ingredients],
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
           />
        </main>
      </div>
    );
  }
}

export default App;
