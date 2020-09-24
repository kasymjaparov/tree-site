import React from 'react'
import './footer.scss'

function App() {
  return (
   <footer className='footer'>
     <div className="footer_refs">
     <span><a target='_blank' rel="noopener noreferrer" href='https://www.instagram.com/elki.tokmok/'><i className='fa fa-instagram'></i></a></span>
<span><a target='_blank' rel="noopener noreferrer" href='https://wa.me/+996704614512?text=Здравствуйте%20я%20хотел%20узнать%20насчет%20елок.'><i className='fa fa-whatsapp'></i></a ></span>
<span><a target='_blank' rel="noopener noreferrer" href='tel:+996704614512'><i className='fa fa-phone'></i></a ></span>
     </div>
<span className='cert'> &copy;  Все права сертифицированы</span>
   </footer>
  )
}

export default App;
