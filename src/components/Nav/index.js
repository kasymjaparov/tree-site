import React from 'react'
import {NavLink } from 'react-router-dom'
import classes from './classes.module.scss'
import tree from '../../img/logotree2.png'
import Menu from './Menu'

function App() {
  return (
    <div className={classes.nav}>
     <div className={classes.wrapper}>
    <NavLink className={classes.logo} to='/' exact><img src={tree} alt="Xmas tree"/></NavLink>
    <Menu />
    </div>
    </div>
  )
}

export default App;
