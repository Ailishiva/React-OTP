import React from 'react'
import {Route, Routes} from 'react-router'
import Home from './Home'
import Contact from './Contact'
import ChartandMap from '../Map/ChartandMap'
function Router() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='/map' element={<ChartandMap/>}/>
    </Routes>
  )
}

export default Router