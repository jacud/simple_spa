import React, { FC } from "react";
import classes from "./StyledSelect.module.scss"

interface IOptionType {
    value: number | string,
    title: number | string,
}

interface ISelectProps {
    options: IOptionType[],
    defaultValue: string,
    value: number | string,
    onSelect: (value: number | string) => void | React.Dispatch<React.SetStateAction<number | string>>;
}

const StyledSelect : FC<ISelectProps> = ({options, defaultValue, value, onSelect}) => {
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