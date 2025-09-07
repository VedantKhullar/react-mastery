import React from 'react'
import Contacts from './components/Contacts'
import NavBar from './components/NavBar'
import {Routes, Route } from 'react-router'

import Home from './components/pages/Home'
import About from './components/pages/About'
import Pricing from './components/pages/Pricing'
import Individual from './components/pages/Individual'
import Enterprise from './components/pages/Enterprise'

const App = () => {
  return (
    <>
    {/* <Contacts /> */}
    <NavBar />
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/pricing' element={<Pricing/>}>
        <Route path='individual' element={<Individual />}/>
        <Route path='enterprise' element={<Enterprise />}/>
      </Route>
    </Routes>
    </>
  )
}

export default App