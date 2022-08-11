import React from 'react'
import { Link } from 'react-router-dom'

export default function HeaderLeft() {
    return (
      <section className="header">
        <p>header izquierdo si</p>
        <p>sus 3</p>
        <Link to='/xd'>
          a XD
        </Link>
      </section>
    )
  }