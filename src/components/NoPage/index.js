import React from 'react'
import { NavLink } from 'react-router-dom'
import c from './classes.module.css'

function NoPageNav() {
  return (
    <div className={c.nopage}>
      <div className={c.content}>
        <svg viewBox="0 0 960 300">
          <symbol id="s-text">
            <text textAnchor="middle" x="50%" y="50%">404</text>
          </symbol>
          <g className={c['g-ants']}>
            <use xlinkHref="#s-text" className={c.text} />
            <use xlinkHref="#s-text" className={c.text} />
            <use xlinkHref="#s-text" className={c.text} />
            <use xlinkHref="#s-text" className={c.text} />
            <use xlinkHref="#s-text" className={c.text} />
          </g>
        </svg>
        <h1>Page Not Found</h1>
        <NavLink to="/">Back to Home</NavLink>
      </div>
    </div>
  )
}

export default NoPageNav
