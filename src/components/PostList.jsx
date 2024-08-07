import NewPost from "./NewPost";
import Post from "./Post";
import classes from "./PostList.module.css";
import { useState, useEffect } from "react";
import Modal from "./Modal";
function PostList({ isPosting, onStopPosting }) {
  const [posts, setPosts] = useState([]);
  const[isFetching, setIsFetching] = useState(false);
  
  useEffect(()=>{
    async function fetchPosts(){ 
      setIsFetching(true);
      const response = await fetch('http://localhost:8080/posts');
      const resData = await response.json();
      setPosts(resData.posts);
      setIsFetching(false);
    }
    fetchPosts();
  },[]);

  function addPostHandler(postData) {
    fetch('http://localhost:8080/posts',{
      method: 'POST',
      body: JSON.stringify(postData),
      headers: {
        'Content-Type': 'application/json'
      }
    }

    );

    setPosts((prevPosts) => {
      return [postData, ...prevPosts];
    });
  }

  return (
    <>
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost onCancel={onStopPosting} onAddPost={addPostHandler} />
        </Modal>
      )}
      {!isFetching && posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post) => (
            <Post name={post.name} text={post.text} />
          ))}
        </ul>
      )}
      {!isFetching && posts.length === 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>There are no posts yet.</h2>
          <p>Start adding some!</p>
        </div>
      )}

      {isFetching && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>Loading...</h2>
        </div>
      )}
    </>
  );
}
export default PostList;
