import React from 'react'
import { Outlet } from 'react-router-dom'

const LayoutWebsite = () => {
  return (
    <div>
    <header>
    Header
    </header>
    <div >
   <Outlet/>
    </div>
    <footer>Footer</footer>
    </div>
  )
}

export default LayoutWebsite