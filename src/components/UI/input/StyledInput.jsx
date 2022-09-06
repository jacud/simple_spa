import React from "react";
import classes from "./StyledInput.module.scss"

const StyledInput  = (props) => { 
    return (
        <input {...props} className={classes.input_custom} />
    );
}

export default StyledInput;