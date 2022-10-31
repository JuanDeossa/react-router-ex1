import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useBlogData } from '../Hooks/useBlogData'

function BlogPost() {
  const {slug}=useParams()
  const blogData=useBlogData()
  const blogPost=blogData.find(post=>post.slug===slug)
  const {title,author,content}=blogPost
  // React Hook for Navigation & function to return to /blog
  const navigate=useNavigate()
  const onBack=(slug)=>{
    navigate(slug)
  }
  return (
    <>
    <h2>{title}</h2>
    <button
      onClick={()=>onBack('/blog')}
    >&#8617;</button>
    <p>{author}</p>
    <p>{content}</p>
    </>
  )
}

export {BlogPost}