import React from "react";
import StyledButton from "./UI/button/StyledButton";

const PostItem  = ({post, index, onDelete}) => {  
    function deleteHandler() {
        onDelete(post);
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
                <StyledButton onClick={deleteHandler}>
                    Удалить
                </StyledButton>
            </div>
        </div>
    );
}

export default PostItem;