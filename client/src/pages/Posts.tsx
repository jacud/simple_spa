import React, { useEffect, useRef, useState } from "react";
import PostService from "../API/PostService";
// import Pagination from "../components/Pagination";
import PostFilter, { IFilterFilterProp } from "../components/PostFilter";
import PostForm from "../components/PostForm";
import PostList from "../components/PostList";
import StyledButton from "../components/UI/button/StyledButton";
import Loader from "../components/UI/loader/Loader";
import Modal from "../components/UI/modal/Modal";
import StyledSelect from "../components/UI/select/StyledSelect";
import { useFetching } from "../hooks/useFetching";
import { useObserver } from "../hooks/useObserver";
import { usePosts } from "../hooks/usePosts"; 

import { getPagesCount } from "../utils/pages";

import IPost from "../types/IPost"

export default function Posts() {
  const [posts, setPosts] = useState<Array<IPost>>([]);
  const [filter, setFilter] = useState<IFilterFilterProp>({query: '', sort: ''});
  const [modalVisibility, setModalVisibility] = useState<boolean>(false);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [limit, setLimit] = useState<number>(10);
  const [page, setPage] = useState<number>(1);
  const lastElementRef = useRef<HTMLDivElement>(null);

  const [fetchPosts, isPostLoading, postError] = useFetching(async (limit, page) => {
    const {data: newPosts, headers} = await PostService.getAll(limit, page);
    setPosts([...posts, ...newPosts]);
    setTotalPages(getPagesCount(headers['x-total-count'], limit));
  });

  useObserver(lastElementRef, page < totalPages, isPostLoading, () => {
    setPage(prev => prev + 1);
  })

  useEffect(() => {
    fetchPosts(limit, page);
  }, [page, limit]);

  const deletePost = (post: IPost) => {
    setPosts(posts.filter(item => item.id !== post.id));
  }  

  const sortedAndFilteredPosts = usePosts(posts, filter.sort, filter.query);

  const createPost = (post: IPost) => {
    setPosts([...posts, post]);
    setModalVisibility(false);
  }

  // const selectPage = (page) => {
  //   setPage(page);
  //   fetchPosts(limit, page);
  // }

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
      <StyledSelect 
        value={limit}
        defaultValue={"Количество элементов на странице"}
        options={
            [
                {value: "5", title: "5"},
                {value: "10", title: "10"},
                {value: "15", title: "15"},
                {value: "20", title: "20"},
                {value: "-1", title: "Все"}
            ]
        }
        onSelect={selectedLimit => setLimit(parseInt(selectedLimit.toString()))}
      />
      
      { 
        postError && 
        <div style={{display: 'flex', justifyContent: 'center', marginTop: '50px'}}>
            <h1>SomeError {postError}</h1>
        </div>
      }
      <PostList ref={lastElementRef} deletePost={deletePost} posts={sortedAndFilteredPosts} title={"Список постов"}/>
      {
        isPostLoading  && <div style={{display: 'flex', justifyContent: 'center', marginTop: '50px'}}>
          <Loader />
        </div>
      }
      {/* <Pagination selected={page} totalPages={totalPages} onSelect={(p) => selectPage(p)} /> */}
    </div>
  )
}