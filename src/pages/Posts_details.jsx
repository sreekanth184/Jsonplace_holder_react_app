import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Comments_card from '../component/Comments_card'
import typicode_instance from '../Services/api'
import Post_layout from '../component/Post_layout'


function Posts_details() {
  let[comment, setComments]=useState([])
  let[post, setPost]=useState(null)
  let {postId}=useParams()

  async function fetchComments(){
    try{
        let res1= await typicode_instance.get(`/posts/${postId}`)
        let res2= await typicode_instance.get(`/posts/${postId}/comments`)
        setPost(res1.data)
        setComments(res2.data)
        console.log(res1.data)
    }
    catch(error){
      console.log(error)
    }
  }

  useEffect(()=>{
    fetchComments()
  },[])
  return (
    <div>
      {post&&<Post_layout userposts={post} showlink={false}/>}
      {comment.length?comment.map((comments)=><Comments_card comments={comments}/>):"loading.."}
    </div>
  )
}

export default Posts_details
