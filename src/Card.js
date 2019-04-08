import React, { Component } from 'react';

const Card = (props) => (
    <div className="card">
        <h2 className="meal-name">{props.name}</h2>
        {/* <div className="lists"> 
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
        <div className="card-btns">
            <button className="delete btn">Delete</button>
            <button className="edit btn">Edit</button>
        </div> */}
    </div> 
)

export default Card; 