import React from "react";
import { usePagination } from "../hooks/usePagination";
import StyledButton from "./UI/button/StyledButton";


export default function Pagination({totalPages, onSelect, selected}) {
    const pagesArray = usePagination(totalPages);
    if(!totalPages || totalPages < 2) {
        return (
            ''
        );    
    }
    
    return (
        <div className="pagination">
            {pagesArray.map((p) => {
                return (
                    <StyledButton {...{disabled: selected == p}} className={selected == p ? 'page__active' : ''} onClick={() => onSelect(p)} key={p}>
                        {p}
                    </StyledButton>
                )
            })} 
        </div>
    );
}