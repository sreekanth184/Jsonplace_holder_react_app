import React from 'react'

function Photos_card({album}) {
  let{id,title}=album
  console.log
  return (
    <div>
      <h3>{id}</h3>
      <p>{title}</p>
      <hr/>
    </div>
  )
}

export default Photos_card
