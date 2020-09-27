import React from 'react'
import './dostavka.scss'

function App(props) {
  return (
     <div className="dostavka">
       <div className="dostavka_wrap">
       <h2>Контакты</h2>
   <div className='dostavka_desc'>
     <i className='fa fa-whatsapp'></i>
   <a target='_blank' rel="noopener noreferrer" href='https://wa.me/+996704614512?text=Здравствуйте%20я%20хотел%20узнать%20насчет%20елок.'>Whatsapp</a> <br/>
   <i className='fa fa-phone'></i>
   <a target='_blank' rel="noopener noreferrer" href='tel:+996704614512'>+996704614512</a> <br/>
</div>
     </div>
       </div>
)}

export default App;
