import { useMemo } from "react";

export const usePagination = (totalCount: number) => {
  const pagesArray = useMemo<number[]>(() : number[] => {
    const result : number[] = [];
    for (let i = 0; i < totalCount; i++) {
      result.push(i + 1);
    }
    return result;
  }, [totalCount] );

  return pagesArray;
}
