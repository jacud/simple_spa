import React from "react";
import classes from "./StyledButton.module.scss"

const StyledButton  = ({children : childrenProp, ...parentProps}) => { 
    return (
        <button {...parentProps} className={classes.button_custom}>
            {
                childrenProp
            }
        </button>
    );
}

export default StyledButton;