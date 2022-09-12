import { useMemo } from "react";
import IPost from "../types/IPost";

export const useSortedPosts = (posts : IPost[], sort: string) : IPost[] => {
    const sortedPosts = useMemo<IPost[]>(() : IPost[] => {
        if(sort) {
    
          return [...posts].sort((a: any, b: any) =>  a[sort].localeCompare(b[sort]));
        }
        return posts;
      }, [sort, posts]);
      return sortedPosts;
}

export const usePosts = (posts : IPost[], sort: string, query: string) => {
     const sortedPosts = useSortedPosts(posts, sort);

    const sortedAndFilteredPosts = useMemo<IPost[]>(() : IPost[] => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(query.toLowerCase()));
      },  [query, sortedPosts]);
    
    return sortedAndFilteredPosts;
}