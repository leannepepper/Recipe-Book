import React from 'react';


const Modal = ({handleClose, show}) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none"; 

    return (
        <div className={showHideClassName}>
            <section className="modal-main">
                <button onClick={handleClose}>X</button>
                <h3>Add a New Recipe</h3>
                <label for="recipe-name">Whats the name of this recipe? </label>
                <input type="text" id="recipe-name"/><br></br>

                <label for="recipe-name">List the Ingredience </label>
                <input type="text" id="recipe-name"/><br></br>

                <label for="recipe-name">List the Directions </label>
                <input type="text" id="recipe-name"/>




               
            </section>

        </div>
    )
}

export default Modal; 



