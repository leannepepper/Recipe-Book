import React, { Component } from 'react';


const Modal = ({handleClose, show}) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none"; 

    return (
        <div className={showHideClassName}>
            <section className="modal-main">
                Hello world

                <button onClick={handleClose}>X</button>
            </section>

        </div>
    )
}

export default Modal; 



