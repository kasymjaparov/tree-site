import React from 'react'
import './index.scss'

function App(props) {
  return (
     <div className="review_rev_item">
     <div className="review_rev_item_header">
         <div className="review_rev_item_header_stars">
<span className='fa fa-star'></span>
<span className='fa fa-star'></span>
<span className='fa fa-star'></span>
<span className='fa fa-star'></span>
<span className='fa fa-star'></span>
         </div>
  <div className="review_rev_item_header_name"><span className='fa fa-user'></span>{props.name}</div>
     </div>
  <div className="review_rev_item_date">{props.date}</div>
  <div className="text">{props.text}</div>

     </div>
  )
}

export default App;
