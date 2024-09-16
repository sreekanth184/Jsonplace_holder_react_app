import React from 'react'
import { Link } from 'react-router-dom'


function Album_layout({userAl, showlink=true}) {
  let {id,title}=userAl
  
  return (
    <div>
      <h3>albumid:{id}</h3>
      <p>{title}</p>
      {showlink&&<Link to={`/albums/${id}/photos`}> Album-Details</Link>}
      <hr/>
    </div>
  )
}

export default Album_layout
