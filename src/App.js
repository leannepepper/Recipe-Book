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
          <button>+ Add</button>
        </header>
          <h1>Scrumptious</h1>
          <h5>What's for dinner? Who cares!</h5>
        <body>
          <div className="card-container">
            <RecipeCard />
          </div>
        </body>
      </div>
    );
  }
}

export default App;
