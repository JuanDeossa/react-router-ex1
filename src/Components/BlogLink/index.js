import React from 'react'
import { NavLink } from 'react-router-dom'

function BlogLink({post}) {
  const {title,slug}=post
  return (
    <li>
      <NavLink to={`/blog/${slug}`}>{title}</NavLink>
    </li>
  )
}

export {BlogLink}