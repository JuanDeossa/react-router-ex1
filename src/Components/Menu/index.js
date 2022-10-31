import React from 'react'
import { NavLink } from 'react-router-dom'
import { useRoutes } from '../Hooks/useRoutes'

function Menu() {
  const routes=useRoutes()
  return (
    <nav>
      <ul>
        {routes.map((route,i)=>(
            <li key={i}>
              <NavLink
                to={route.to}
                style={
                  ({isActive})=>(
                    {color:(isActive)?"red":"black"}
                  )
                }
                end
              >{route.text}</NavLink>
            </li>
        ))}
      </ul>
    </nav>
  )
}

export {Menu}