import React from 'react'
import { useParams } from 'react-router-dom'
import { useBlogData } from '../Hooks/useBlogData'

function BlogPost() {
  const {slug}=useParams()
  const blogData=useBlogData()
  const blogPost=blogData.find(post=>post.slug===slug)
  const {title,author,content}=blogPost
  return (
    <>
    <h2>{title}</h2>
    <p>{author}</p>
    <p>{content}</p>
    </>
  )
}

export {BlogPost}