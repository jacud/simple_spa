import React from "react";
import StyledInput from "./UI/input/StyledInput";
import StyledSelect from "./UI/select/StyledSelect";

export default function PostFilter({filter, setFilter}) {
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
                onSelect={selectedSort => setFilter({...filter, sort:selectedSort})}
            />
        </div>
    );

}