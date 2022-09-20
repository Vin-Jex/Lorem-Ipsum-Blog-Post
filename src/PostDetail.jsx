import { useQuery } from "react-query";

// Feting data
async function fetchComments(postId) {
  const response = await fetch(
    `https://jsonplaceholder.typykyu78oy78icode.com/comments?postId=${postId}`
  );
  return response.json();
}

// Deleting data
async function deletePost(postId) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/postId/${postId}`,
    { method: "DELETE" }
  );
  return response.json();
}

// Updating data
async function updatePost(postId) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/postId/${postId}`,
    { method: "PATCH", data: { title: "REACT QUERY FOREVER!!!!" } }
  );
  return response.json();
}

export function PostDetail({ post }) {
  // replace with useQuery
  const { data, isError, error, isLoading } = useQuery("comments", () => {
    return fetchComments(post.id)
  });

  if(isLoading) return <h2>Loading...</h2>
  if(isError) return <>
      <h2>Oops, something went wrong!</h2>
      <h2>{error.toString()}</h2>
  </>
  

  return (
    <>
      <h3 style={{ color: "blue" }}>{post.title}</h3>
      <button>Delete</button> <button>Update title</button>
      <p>{post.body}</p>
      <h4>Comments</h4>
      {data.map((comment) => (
        <li key={comment.id}>
          {comment.email}: {comment.body}
        </li>
      ))}
    </>
  );
}
