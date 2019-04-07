import React, { Component } from 'react';

const RecipeCard = () => {
    return (
        <div className="card-container">
        <div className="card">
            <h2 className="meal-name">Name of Meal</h2>
            <span className="classification">Type of Meal</span>
           <div className="lists"> 
            <ul className="ingredients"> Ingredients
                <li>chicken</li>
                <li>rice</li>
                <li>Milk</li>
            </ul>
            <ol className="directions"> Directions 
                <li>step 1</li>
                <li>step 2</li>
                <li>step 3</li>
            </ol>
        </div>
        </div>
        <div className="card">
            <h2 className="meal-name">Name of Meal</h2>
            <span className="classification">Type of Meal</span>
            <div className="lists">
                <ul className="ingredients"> Ingredients
                    <li>chicken</li>
                    <li>rice</li>
                    <li>Milk</li>
                </ul>
                <ol className="directions"> Directions 
                    <li>step 1</li>
                    <li>step 2</li>
                    <li>step 3</li>
                </ol>
             </div>
        </div>
        <div className="card">
            <h2 className="meal-name">Name of Meal</h2>
            <span className="classification">Type of Meal</span>
            <div className="lists">
                <ul className="ingredients"> Ingredients
                    <li>chicken</li>
                    <li>rice</li>
                    <li>Milk</li>
                </ul>
                <ol className="directions"> Directions 
                    <li>step 1</li>
                    <li>step 2</li>
                    <li>step 3</li>
                </ol>
            </div>
        </div>
        <div className="card">
            <h2 className="meal-name">Name of Meal</h2>
            <span className="classification">Type of Meal</span>
            <div className="lists">
                <ul className="ingredients"> Ingredients
                    <li>chicken</li>
                    <li>rice</li>
                    <li>Milk</li>
                </ul>
                <ol className="directions"> Directions 
                    <li>step 1</li>
                    <li>step 2</li>
                    <li>step 3</li>
                </ol>
            </div>
        </div>
    </div>
    )
}

export default RecipeCard; 