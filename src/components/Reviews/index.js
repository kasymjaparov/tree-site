import React from 'react'
import './index.scss'
import Review from './Review'

function App(props) {
  return (
     <div className="reviews">
    <div className="reviews-wrap">
        <h2>Отзывы</h2>
        <div className="reviews_revs">
            <Review name='Акылбек Осмоналиев' date='17 сентября 2020' text='"Хорошое обслуживание и отличное качество елок! Советую"'/>
            <Review name='Акылай Суваналиева' date='20 августа 2020' text='"Елки хорошего качества но у меня не прижились..."'/>
            <Review name='Анастасия Андреева' date='2 июня 2020' text='"Голубая ель хорошо смотрится на среди остальной зелени в палисаднике"'/>
            <Review name='Сыймык Ормонов' date='8 февраля 2020' text='"Бактары абдан жакшы бизге доставканы арзан кылып берди"'/>
            <Review name='Григорий Лютин' date='17 января 2020' text='"Быстро отвечают на заявку "'/>
        </div>
    </div>
     </div>
  )
}

export default App;
