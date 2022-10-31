import React from 'react'
import { BlogLink } from '../BlogLink'
import {useBlogData} from '../Hooks/useBlogData'

function BlogPage() {
  const blogData=useBlogData()
  return (
    <>
    <h2>BlogPage</h2>
    <ul>
      {blogData.map((post,i)=>(
        <BlogLink key={i} post={post}/>
      ))}
    </ul>
    </>
  )
}

export {BlogPage}

