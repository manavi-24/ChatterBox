import { useLoaderData, Link, useParams } from "react-router-dom";

import Modal from "../components/Modal";
import classes from "./PostDetails.module.css";

function PostDetails() {
  const data = useLoaderData();  // Get the loaded data
  const post = data?.post;  
  console.log("PostDetails: Data from loader:", data); // Debugging log
  console.log("PostDetails: Post Object:", post); // Debugging log
  //const post = useLoaderData();

  if (!post) {
    console.error("PostDetails: Post is null or undefined. Showing fallback UI.");
    return (
      <Modal>
        <main className={classes.details}>
          <h1>Could not find post</h1>
          <p>Unfortunately, the requested post could not be found.</p>
          <p>
            <Link to=".." className={classes.btn}>
              Okay
            </Link>
          </p>
        </main>
      </Modal>
    );
  }
  return (
    <Modal>
      <main className={classes.details}>
        <p className={classes.name}>{post.name}</p>
        <p className={classes.text}>{post.text}</p>
      </main>
    </Modal>
  );
}

export default PostDetails;


/*export async function loader({params}) {
  const response = await fetch('http://localhost:8080/posts/' + params.postId);
  const resData = await response.json();
  return resData.post;
}*/

export async function loader({ params }) {
  const { id } = params; // Extract the post ID from the URL
  console.log("Loader: Fetching post with ID:", id); // Debugging log
  try {
    const response = await fetch(`http://localhost:8080/posts/${id}`);
    if (!response.ok) {
      throw new Error("Post not found");
    }
    const post = await response.json();
    return post ; // Return the post data
  } catch (error) {
    console.error(error);
    return null; // Return null or handle the error appropriately
  }
}
//export default PostDetails;