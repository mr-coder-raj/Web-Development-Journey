import React, { useEffect } from 'react'

const Navbar = ({ color }) => {

  // Case 1: Runs on every render
  useEffect(() => {
    alert("Hey im run on every render")
  })

  // Case 2:Runs on first render
  useEffect(() => {
    alert("Hey welcome to my page. This is the first render")
  }, [])

  // Case 3: Runs when certain value was changed
  useEffect(() => {
    alert("Hey welcome to my page")
  }, [color])

  //Example of Cleanup function
  useEffect(() => {
    alert("Hey welcome to my page. This is the first render of app.jsx")
    
    return () => {
      alert("components was unmounted")
    }
  }, [])

  return (
    <div>
      i am navbar of {color} color hehe..
    </div>
  )
}

export default Navbar
