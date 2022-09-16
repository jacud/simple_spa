import React, { FC } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";

import StyledButton from "./UI/button/StyledButton";

import IPost from "../types/IPost";

interface PostItemProps {
    post: IPost,
    index: number,
    onDelete: (post: IPost) => void | React.Dispatch<React.SetStateAction<IPost>>;
}

const PostItem : FC<PostItemProps> = ({ post, index, onDelete }) => {  
    const navigate : NavigateFunction = useNavigate();
    function deleteHandler() {
        onDelete(post);
    }

    function openPost() {
        navigate(`/posts/${post.id}`);
    }
    return (
        <div className="post">
            <div className="post__content">
                <strong className="post__content__title">{index}. {post.title}</strong>
                <div>
                    {post.body}
                </div>
            </div>
            <div className="post__btns">
                <StyledButton onClick={ openPost }>
                    Открыть
                </StyledButton>
                <StyledButton onClick={ deleteHandler }>
                    Удалить
                </StyledButton>
            </div>
        </div>
    );
}

export default PostItem;