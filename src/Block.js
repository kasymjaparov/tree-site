import React from 'react'
import './App.css'

function App(props) {
  return (
     <div className="block">
     {props.children}
     </div>
  )
}

export default App;
