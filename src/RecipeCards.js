import React, { Component } from 'react';
import Card from "./Card";

const RecipeCards = (props) => (
    <ul className="card-container">
        {props.recipes.map((recipe) => 
            <Card 
                name={recipe.name}
                ingredients={recipe.ingredients}
                directions={recipe.directions}
            />
        )}
    </ul> 
)

export default RecipeCards; 

