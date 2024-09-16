import React from 'react'

function Comments_card({comments}) {
    let{id,title,body}=comments
  return (
    <div>
      <h3>{id}</h3>
      <p>{title}</p>
      <p>{body}</p>
      <hr/>
    </div>
  )
}

export default Comments_card
