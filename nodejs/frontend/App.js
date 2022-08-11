import React from 'react'
import { Route, Routes } from 'react-router-dom'

import './style.scss'
import Section from './Section'

function Xd() {
  return (
    <div>
      <h1>Xd</h1>
    </div>    
  )
}

export default function App() {
  return (
      <Routes>
          <Route path='/' element={ <Section /> } />
          <Route path='/xd' element={ <Xd /> } />
      </Routes>
  )
}
