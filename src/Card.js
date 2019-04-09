import React, { Component } from 'react';

const Card = (props) => (
    <div className="card">
        <h2 className="meal-name">{props.name}</h2>
        <div className="lists"> 
            <ul className="ingredients"> Ingredients
                {props.ingredients.map((ingredient) => 
                <li> {ingredient} </li>
                )}
            </ul>
            <ol className="directions"> Directions 
            {props.directions.map((direction) => 
                <li> {direction} </li>
                )}
            </ol>
        </div>
        <div className="card-btns">
            <button className="delete btn" onClick={() => props.handleRemoveRecipe(props.index)}>Delete</button>
            <button className="edit btn">Edit</button>
        </div>
    </div> 
)

export default Card; 