import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function HeaderLeft() {
  useEffect(() => {
    console.log('Miguel')
  },[])
  
    return (
      <section className="header">
        <p>header izquierdo si</p>
        <p>sus 3</p>
        <Link to='/xd'>
          a XD
        </Link>
        <Link to='/xd'>
          aguacate
        </Link>
      </section>
    )
  }