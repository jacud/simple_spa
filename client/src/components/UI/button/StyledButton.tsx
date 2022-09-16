import React, { ButtonHTMLAttributes, FC } from "react";
import classes from "./StyledButton.module.scss"

interface IButtomProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children?: React.ReactNode
}

const StyledButton: FC<IButtomProps>  = ({ children : childrenProp, ...parentProps }) => { 
    return (
        <button { ...parentProps } className={ classes.button_custom }>
            {
                childrenProp
            }
        </button>
    );
}

export default StyledButton;