import React, { Component } from 'react';
import './RecipeCard';
import './App.css';
import RecipeCard from './RecipeCard';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h4>Scrumptious</h4>
          <button className="add-btn">+ Add</button>
        </header>
        <div className="hero">
          <h1>Scrumptious</h1>
          <button className="random-btn">What's for dinner? Who cares!</button>
        </div>
   
        <main>
          <RecipeCard />
        </main>
      </div>
    );
  }
}

export default App;
