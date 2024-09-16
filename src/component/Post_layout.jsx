import React from 'react'
import { Link } from 'react-router-dom'

function Post_layout({userposts,showlink=true}) {
  let{id,title, body}=userposts
  return (
    <div>
      <h3>{id}</h3>
      <p>{title}</p>
      <p>{body}</p>
      {showlink&&<Link to={`/posts/${id}/comments`}> More Comments</Link>}
      <hr/>
      <hr/>
    </div>
  )
}

export default Post_layout
