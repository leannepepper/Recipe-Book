import React, { Component } from 'react';

const RecipeCard = () => {
    return (
        <div className="card">
            <h3>Name of Meal</h3>
            <span>Type of Meal</span>
            <ul className="ingredients"> Ingredients
                <li>chicken</li>
                <li>rice</li>
                <li>Milk</li>
            </ul>
            <ol> Directions 
                <li>step 1</li>
                <li>step 2</li>
                <li>step 3</li>
            </ol>
        </div>
    )
}

export default RecipeCard; 