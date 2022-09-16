import React, { FC, InputHTMLAttributes } from "react";
import classes from "./StyledInput.module.scss"

type IInputProps = InputHTMLAttributes<HTMLInputElement>

const StyledInput : FC<IInputProps>  = (props) => { 
    return (
        <input { ...props } className={ classes.input_custom } />
    );
}

export default StyledInput;