import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import './main.scss'
import img1 from '../../img/blue3.jpg'
import img2 from '../../img/blue2.jpg'

function App(props) {
  return (
     <div className="main">
       <div className="main_wrap">
         <div className="main_elki-row">
           <div className="main_elki_block">
             <div className="main_elki_block_img">
             <Carousel>
  <Carousel.Item> <img className="d-block w-100" src={img1} alt="blue spruce"/> </Carousel.Item>
  <Carousel.Item> <img className="d-block w-100" src={img2} alt="blue spruce"/> </Carousel.Item>
             </Carousel>
             </div>
             <div className="main_elki_block_desc">
             <span>Голубая ель</span>
             <span>Голубая ель пользуется популярностью у садоводов и дачников, так как выдерживает морозы до -30°С, к тому же она засухоустойчива и не боится сильного ветра.<br/>Лесная красавица всегда была олицетворением благополучия и богатства. Украшая двор или сад, голубая ель становится всеобщей любимицей. Взрослое дерево уже не требует особого ухода, а вот молодые елочки нуждаются в постоянной заботе, пока не окрепнут. Данное вечнозеленое растение растет медленно и характеризуется голубыми иголочками. Огромное количество видов отличается между собой формой и размерами. Очень красиво голубая ель выглядит с молодыми шишками, которые красного или фиолетового цвета.</span>
             <span>Высота: 1,5м</span>
             <span>Возраст: 6 месяцев</span>
               <span>Цена : 7000 сом</span>
             </div>
            </div>

             <div className="main_elki_block">
             <div className="main_elki_block_img">
             <Carousel >
  <Carousel.Item> <img className="d-block w-100" src={img1} alt="blue spruce"/> </Carousel.Item>
  <Carousel.Item> <img className="d-block w-100" src={img2} alt="blue spruce"/> </Carousel.Item>
             </Carousel>
             </div>
             <div className="main_elki_block_desc">
             <span>Голубая ель</span>
             <span>Голубая ель пользуется популярностью у садоводов и дачников, так как выдерживает морозы до -30°С, к тому же она засухоустойчива и не боится сильного ветра.<br/>Лесная красавица всегда была олицетворением благополучия и богатства. Украшая двор или сад, голубая ель становится всеобщей любимицей. Взрослое дерево уже не требует особого ухода, а вот молодые елочки нуждаются в постоянной заботе, пока не окрепнут. Данное вечнозеленое растение растет медленно и характеризуется голубыми иголочками. Огромное количество видов отличается между собой формой и размерами. Очень красиво голубая ель выглядит с молодыми шишками, которые красного или фиолетового цвета.</span>
             <span>Высота: 1,5м</span>
             <span>Возраст: 6 месяцев</span>
               <span>Цена : 7000 сом</span>
             </div>

             </div>
         </div>
     </div>
       </div>
)}

export default App;
