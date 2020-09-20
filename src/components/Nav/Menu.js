import React from 'react';
import {NavLink } from 'react-router-dom'
import classes from './classes.module.scss'

function App() {
  return (
    <div className={classes.container}>
    <label htmlFor="toggle-1" className={classes["toggle-menu"]}>
      <ul>
        <li />
        <li />
        <li />
      </ul>
    </label>
    <input type="checkbox" id="toggle-1" />
    <nav>
      <ul>
      <li><NavLink activeClassName={classes.activeLink} to="/request" exact>Оставить заявку</NavLink></li>
        <li><NavLink activeClassName={classes.activeLink} to="/dostavka" exact>Доставка</NavLink></li>
        <li><NavLink activeClassName={classes.activeLink} to="/portfolio" exact>Отзывы</NavLink></li>
        
      </ul>
    </nav>
  </div>
  );
}

export default App;
