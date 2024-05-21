import React from 'react'
import ResponsiveAppBar from './components/header/ResponsiveAppBar'
import Footer from './components/Footer/Footer'

import { Outlet } from 'react-router-dom'

function HomelayOut() {

  return (
    <div>
   <ResponsiveAppBar/>
   <Outlet />
   <Footer />
    </div>
  )
}

export default HomelayOut