import React, { useState } from "react";
import StyledButton from "./UI/button/StyledButton";
import StyledInput from "./UI/input/StyledInput";

const PostForm  = ({createPost}) => {
    const [post, setPost] = useState({title:'', body:''});

    const clickHandler  = (e) => {
        e.preventDefault();
        createPost({...post, id: Date.now()});
        setPost({title:'', body: ''})
    }

    return (
        <form className="postform">
            <StyledInput 
                type="text" 
                placeholder="Название поста"
                value={post.title}
                onChange={(e) => setPost({...post, title: e.target.value})}
            />
            <StyledInput
                type="text"
                placeholder="Содержание поста"
                value={post.body}
                onChange={(e) => setPost({...post, body: e.target.value})}
            />
            <StyledButton onClick={clickHandler}>
                Push mE!!!!
            </StyledButton>
        </form>
    );
}

export default PostForm;