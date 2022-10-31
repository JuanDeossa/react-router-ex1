function useRoutes() {
  const routes=[]
  routes.push({to:'/',text:'Home Page !!!'})
  routes.push({to:'/blog',text:'Blog Page !!!'})
  routes.push({to:'/profile',text:'Profile Page !!!'})
  // Insert new route above this line.
  return routes
}

export {useRoutes}