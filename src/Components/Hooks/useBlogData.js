function useBlogData() {
  const blogData=[]
  blogData.push({
    title:'What is React ?',
    slug:'what-is-react',
    content:"It's a library for Javascript",
    author:'anonymous',
  })
  blogData.push({
    title:'What is React Hooks ?',
    slug:'what-is-react-hooks',
    content:"Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class.",
    author:'reactjs.org',
  })
  blogData.push({
    title:'What is React redux ?',
    slug:'what-is-react-redux',
    content:"React Redux is the official React UI bindings layer for Redux. It lets your React components read data from a Redux store, and dispatch actions to the store to update state.",
    author:'react-redux.js.org',
  })
  // Insert new data above this line.
  return blogData
}

export {useBlogData}