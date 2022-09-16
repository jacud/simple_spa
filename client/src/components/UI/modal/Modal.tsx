import React, { FC } from "react";
import classes from "./Modal.module.scss"

interface IModalProps {
    visible: boolean,
    setVisible: (isVisible: boolean) => void | React.Dispatch<React.SetStateAction<boolean>>,
    children?: React.ReactNode
}

const Modal : FC<IModalProps> = ({ children, visible, setVisible }) => {
    const rootClases = [classes.modal];
    if(visible) {
        rootClases.push(classes.modal__active);
    }

    return (
        <div className={ rootClases.join(' ') } onClick={ () => setVisible(false) }>
            <div className={ classes.modalContent } onClick={ e => e.stopPropagation() }>
                {children}
            </div>
        </div>
    );
}

export default Modal;
