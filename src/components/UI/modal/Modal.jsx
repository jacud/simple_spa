import React from "react";
import classes from "./Modal.module.scss"

const Modal = ({children, visible, setVisible}) => {
    const rootClases = [classes.modal];
    if(visible) {
        rootClases.push(classes.modal__active);
    }

    return (
        <div className={rootClases.join(' ')} onClick={() => setVisible(false)}>
            <div className={classes.modalContent} onClick={ e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
}

export default Modal;
