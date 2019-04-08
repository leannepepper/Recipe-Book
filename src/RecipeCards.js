import React, { Component } from 'react';
import Card from "./Card";

const RecipeCards = (props) => (
    <ul className="card-container">
        {props.recipes.map((recipe, name) => 
            <Card 
                name={recipe.name}
            />
        )}
    </ul> 
)

export default RecipeCards; 

