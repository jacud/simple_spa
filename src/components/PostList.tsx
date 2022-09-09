import React, { forwardRef, FC } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import PostItem from "./PostItem";
import IPost from "../types/IPost";


interface IPostListProps {
    posts: Array<IPost>;
    title: string;
    deletePost: (post: IPost) => void | React.Dispatch<React.SetStateAction<IPost>>;
    ref: React.ForwardedRef<HTMLDivElement>
}

const PostList : FC<IPostListProps> = forwardRef<HTMLDivElement, IPostListProps>(({posts, title, deletePost}, ref) => { 
    return (
        <div className="post_list">
            <div className="post_list_header">
                <h1>{title}</h1>
            </div>
            
            { 
            posts.length ? <TransitionGroup>                
                    {posts.map((post, index) =>
                        <CSSTransition
                            key={post.id}
                            timeout={500}
                            classNames="post"
                        >
                            <PostItem post={post} index={post.id} onDelete={deletePost}/>
                        </CSSTransition>
                    )}
                </TransitionGroup>
                : <h2 style={{textAlign:'center'}}>Nothing found</h2>
            }


            <div ref={ref} style={{visibility: 'hidden', height: '0px', width: '100%', background: 'red'}}></div>
            
        </div>
    );
})

export default PostList;