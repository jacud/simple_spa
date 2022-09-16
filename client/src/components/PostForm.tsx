import React, { useState, FC } from "react";
import StyledButton from "./UI/button/StyledButton";
import StyledInput from "./UI/input/StyledInput";

import IPost from "../types/IPost"

interface IPostFormProps {
    createPost: (post: IPost) => void | React.Dispatch<React.SetStateAction<IPost>>
}

const defaultPost : IPost = {
    body: '',
    id: 0,
    title: '',
    userId: 0
}

const PostForm : FC<IPostFormProps> = ({ createPost }) => {
    const [post, setPost] = useState<IPost>(defaultPost);

    const clickHandler  = (e: React.MouseEvent<HTMLButtonElement>) : void => {
        e.preventDefault();
        createPost({ ...post, id: Date.now() });
        setPost({ ...defaultPost, title:'', body: '' })
    }

    return (
        <form className="postform">
            <StyledInput 
                type="text" 
                placeholder="Название поста"
                value={ post.title }
                onChange={ (e) => setPost({ ...post, title: e.target.value }) }
            />
            <StyledInput
                type="text"
                placeholder="Содержание поста"
                value={ post.body }
                onChange={ (e) => setPost({ ...post, body: e.target.value }) }
            />
            <StyledButton onClick={ clickHandler }>
                Push mE!!!!
            </StyledButton>
        </form>
    );
}

export default PostForm;