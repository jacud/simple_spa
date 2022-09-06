import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import PostItem from "./PostItem";

const PostList  = ({posts, title, deletePost}) => { 
    if(posts.length === 0) {
        return (
            <h2 style={{textAlign:'center'}}>Nothing found</h2>
        );
    }
    return (
        <div className="post_list">
            <div className="post_list_header">
                <h1>{title}</h1>
            </div>
            
            <TransitionGroup>                
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
            
        </div>
    );
}

export default PostList;