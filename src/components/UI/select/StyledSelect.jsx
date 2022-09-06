import React from "react";
import classes from "./StyledSelect.module.scss"
const StyledSelect = ({options, defaultValue, value, onSelect}) => {
    return (
        <select className={classes.select_custom}
            value={value}
            onChange={e => onSelect(e.target.value)}
        >
            <option disabled value="">{defaultValue}</option>
            {
                options.map(item => 
                    <option key={item.value} value={item.value}>{item.title}</option>
                )
            }
        </select>
    );
}

export default StyledSelect;