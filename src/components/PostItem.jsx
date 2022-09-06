import React from "react";
import { useNavigate } from "react-router-dom";

import StyledButton from "./UI/button/StyledButton";

const PostItem  = ({post, index, onDelete}) => {  
    const navigate = new useNavigate();
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
                <StyledButton onClick={openPost}>
                    Открыть
                </StyledButton>
                <StyledButton onClick={deleteHandler}>
                    Удалить
                </StyledButton>
            </div>
        </div>
    );
}

export default PostItem;