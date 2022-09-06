import React, { useEffect, useState } from "react";
import PostService from "../API/PostService";
import Pagination from "../components/Pagination";
import PostFilter from "../components/PostFilter";
import PostForm from "../components/PostForm";
import PostList from "../components/PostList";
import StyledButton from "../components/UI/button/StyledButton";
import Loader from "../components/UI/loader/Loader";
import Modal from "../components/UI/modal/Modal";
import { useFetching } from "../hooks/useFetching";
import { usePosts } from "../hooks/usePosts"; 

import { getPagesCount } from "../utils/pages";

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({query: '', sort: ''});
  const [modalVisibility, setModalVisibility] = useState(false);
  const [totalPages, setTotalPages] = useState(1);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [fetchPosts, isPostLoading, postError] = useFetching(async (limit, page) => {
    const {data: posts, headers} = await PostService.getAll(limit, page);
    setPosts(posts);
    setTotalPages(getPagesCount(headers['x-total-count'], limit));
  });

  useEffect(() => {
    fetchPosts(limit, page);
  }, []);

  const deletePost = (post) => {
    setPosts(posts.filter(item => item.id !== post.id)); 
  }  

  const sortedAndFilteredPosts = usePosts(posts, filter.sort, filter.query);

  const createPost = (post) => {
    setPosts([...posts, post]);
    setModalVisibility(false);
  }

  const selectPage = (page) => {
    setPage(page);
    fetchPosts(limit, page);
  }

  return (
    <div className="App">
      <Modal visible={modalVisibility} setVisible={setModalVisibility}>
        <PostForm createPost={createPost} />
      </Modal>
      <StyledButton onClick={() => setModalVisibility(true)}>
        createPost
      </StyledButton>
      <br />
      <hr />
      <PostFilter 
        filter={filter}
        setFilter={setFilter}
      />
      <hr />
      { 
        postError && 
        <div style={{display: 'flex', justifyContent: 'center', marginTop: '50px'}}>
            <h1>SomeError {postError}</h1>
        </div>
      }
      <PostList deletePost={deletePost} posts={sortedAndFilteredPosts} title={"Список постов"}/>
      {
        isPostLoading  && <div style={{display: 'flex', justifyContent: 'center', marginTop: '50px'}}>
          <Loader />
        </div> 

      }
      <Pagination selected={page} totalPages={totalPages} onSelect={(p) => selectPage(p)} />     
    </div>
  )
}