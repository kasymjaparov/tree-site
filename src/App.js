import React from 'react'
import './App.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './components/Nav/index'
import Appcontainer from './Appcontainer'
import Block from './Block'
import Request from './components/Contact/index'
import Footer from './components/Footer/index'

function App() {
  return (
    <BrowserRouter>
    <Appcontainer>
     <Header/>
     <Block>
       <Switch>
         <Route path='/request' component={Request} exact/>
       </Switch>
     </Block>
     <Footer/>
     </Appcontainer>
    </BrowserRouter>
  )
}

export default App;
