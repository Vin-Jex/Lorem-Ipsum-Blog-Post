import { useMutation, useQuery } from "react-query";

// Feting data
async function fetchComments(postId) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
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
  const { data, isError, error, isLoading } = useQuery(["comments", post.id], () => {
    return fetchComments(post.id)
  });



  const deleteMutation = useMutation((postId) => deletePost(postId))

  const updateMutation = useMutation((postId) => {
    updatePost(postId)
  })

  if(isLoading) return <h2>Loading...</h2>
  if(isError) return <>
      <h2>Oops, something went wrong!</h2>
      <h2>{error.toString()}</h2>
  </>
  


  return (
    <>
      <h3 style={{ color: "blue" }}>{post.title}</h3>
        
      
      {deleteMutation.isError && <div style={{color: "red"}}> Error deleting post</div>}
      {updateMutation.isError && <div style={{color: "red"}}> Error updating post</div>}

      {deleteMutation.isLoading && <div style={{color: "purple"}}> Deleting </div>}
      {updateMutation.isLoading && <div style={{color: "purple"}}>Updating...</div>}

      {deleteMutation.isSuccess && 
        <div style={{color: "purple"}}> Post deleted </div>
      }
      {updateMutation.isSuccess && <div style={{color: "blue"}}> Post updated</div>}
      
      <button 
        onClick={() => deleteMutation.mutate(post.id)}
      >
        Delete
      </button>
        
      <button
        onClick={() => updateMutation.mutate(post.id)}
      >
        Update title</button>
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
