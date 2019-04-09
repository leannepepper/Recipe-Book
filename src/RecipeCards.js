import React, { Component } from 'react';
import Card from "./Card";

const RecipeCards = (props) => (
    <ul className="card-container">
        {props.recipes.map((recipe, index) => 
            <Card 
                name={recipe.name}
                ingredients={recipe.ingredients}
                directions={recipe.directions}
                id={recipe.id}
                key={index}
                handleRemoveRecipe={() => props.handleRemoveRecipe(index)}
            />
        )}
    </ul> 
)

export default RecipeCards; 

