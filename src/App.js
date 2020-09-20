import React from 'react'
import './App.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './components/Nav/index'
import Appcontainer from './Appcontainer'
import Block from './Block'
import Request from './components/Contact/index'
import Footer from './components/Footer/index'
import Dostavka from './components/Dostavka/index'
import Nopage from './components/NoPage'

function App() {
  return (
    <BrowserRouter>
    <Appcontainer>
     <Header/>
     <Block>
       <Switch>
         <Route path='/request' component={Request} exact/>
         <Route path='/dostavka' component={Dostavka} exact/>
         {/* <Route  component={Nopage} /> */}
       </Switch>
     </Block>
     <Footer/>
     </Appcontainer>
    </BrowserRouter>
  )
}

export default App;
