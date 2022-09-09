import React, { FC } from "react";
import StyledInput from "./UI/input/StyledInput";
import StyledSelect from "./UI/select/StyledSelect";

export interface IFilterFilterProp {
    query:  string,
    sort:   string
}

interface IFilterProps {
    filter: IFilterFilterProp,
    setFilter: (filter: IFilterFilterProp) => void | React.Dispatch<React.SetStateAction<IFilterFilterProp>>
}

const PostFilter : FC<IFilterProps> = ({filter, setFilter}) => {
    return (
        <div className="filter">
            <StyledInput
                value={filter.query}
                onChange={e => setFilter({...filter, query:e.target.value})}
            />
            <StyledSelect
                value={filter.sort}
                defaultValue={"Не выбрано"}
                options={
                    [
                        {value: "title", title: "По заголовку"},
                        {value: "body", title: "По телу"}
                    ]
                }
                onSelect={value => {
                    setFilter({...filter, sort:String(value)}); 
                    return;
                }}
            />
        </div>
    );
}

export default PostFilter;