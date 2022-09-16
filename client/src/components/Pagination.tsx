import React, { FC } from "react";
import { usePagination } from "../hooks/usePagination";
import StyledButton from "./UI/button/StyledButton";

interface IPaginationProps {
    totalPages: number,
    onSelect: (page : number) => void,
    selected: number | string
}

const Pagination : FC<IPaginationProps> = ({ totalPages, onSelect, selected }) => {
    const pagesArray = usePagination(totalPages);
    if(!totalPages || totalPages < 2) {
        return (
            null
        );    
    }
    
    return (
        <div className="pagination">
            {pagesArray.map((p) => {
                return (
                    <StyledButton { ...{ disabled: selected === p } } className={ selected === p ? 'page__active' : '' } onClick={ () => onSelect(p) } key={ p }>
                        {p}
                    </StyledButton>
                )
            })} 
        </div>
    );
}

export default Pagination;