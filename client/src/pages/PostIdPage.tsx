import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostService from "../API/PostService";
import { useFetching } from "../hooks/useFetching";
import Loader from "../components/UI/loader/Loader";
import IPost, { defaultPost } from "../types/IPost";
import IComment from "../types/IComment";

const PostIdPage = () => {
    const params = useParams<'id'>();
    const [post, setPost] = useState<IPost>(defaultPost);
    const [comments, setComments] = useState<IComment[]>([]);
    const [fetchPostById, isLoading, error] = useFetching(async (id: number) => {
        const response = await PostService.getById(id);
        setPost(response.data);
    })

    const [fetchCommentsByPostId, isCommentsLoading, commentsError] = useFetching(async (id: number) => {
        const response = await PostService.getCommentsByPostId(id);
        setComments(response.data);
    })

    useEffect(() => {
        fetchPostById(params.id);
        fetchCommentsByPostId(params.id);
    }, []);

    return (
        <div>
            { error ? <div style={ { display: 'flex', justifyContent: 'center', marginTop: '50px' } }><h1>SomeError {error}</h1></div>
                : isLoading
                    ?   <div style={ { display: 'flex', justifyContent: 'center', marginTop: '50px' } }><Loader /></div>
                    :   <div>
                        {post.id}.{post.title}.{post.body}
                        
                    </div>

            }

            { !isLoading && (commentsError ? <div style={ { display: 'flex', justifyContent: 'center', marginTop: '50px' } }><h1>SomeError {error}</h1></div>
                : isCommentsLoading
                    ?   <div style={ { display: 'flex', justifyContent: 'center', marginTop: '50px' } }><Loader /></div>
                    :   <div><h1>sdfsdf</h1>
                        { 
                            comments.map(c => 
                                <div key={ '' + c.id + c.postId }>
                                    <h5>{c.id}.{c.name}</h5>
                                    <p>{c.body}</p>
                                </div>
                            )
                        }                        
                    </div>)

            }
        </div>
        
    );
}

export default PostIdPage;