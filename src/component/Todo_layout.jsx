import React from 'react'

function Todo_layout({usertodo}) {
  let {id,title,completed}=usertodo
  return (
    <div>
      <h3>{id}</h3>
      <p>{title}</p>
      <p>{completed}</p>
      <hr/>
    </div>
  )
}

export default Todo_layout
