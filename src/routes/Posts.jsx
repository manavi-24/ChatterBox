import { Outlet } from "react-router-dom";
import PostList from "../components/PostList";


function Posts() {
  return (
    <>
      <Outlet />
      <main>
        <PostList />
      </main>
    </>
  );
}
export default Posts;


/*export async function loader() {
  const response = await fetch("http://localhost:8080/posts");
  const resData = await response.json();
  return resData.posts;
}*/

export async function loader() {
  try {
    const response = await fetch("http://localhost:8080/posts");
    
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    
    const resData = await response.json();
    return resData.posts || [];
  } catch (error) {
    console.error("Error loading posts:", error);
    return []; // Return an empty array to prevent UI crashes
  }
}

/*export async function loader() {
  try {
    const response = await fetch("http://localhost:8080/posts");

    if (!response.ok) {
      console.error(`Error fetching posts. Status: ${response.status}`);
      return null; // Return `null` to satisfy the loader requirement
    }

    const resData = await response.json();
    return resData.posts || []; // Return an empty array if no posts exist
  } catch (error) {
    console.error("Error loading posts:", error);
    return null; // Return `null` in case of an error
  }
}
*/

