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
            <Review name='Акылай Суваналиева' date='20 августа 2020' text='"Хорошое обслуживание и отличное качество елок! Советую"'/>
            <Review name='Анастасия Андреева' date='2 июня 2020' text='"Хорошое обслуживание и отличное качество елок! Советую"'/>
            <Review name='Сыймык Ормонов' date='8 февраля 2020' text='"Хорошое обслуживание и отличное качество елок! Советую"'/>
            <Review name='Григорий Лютин' date='17 января 2020' text='"Хорошое обслуживание и отличное качество елок! Советую"'/>
        </div>
    </div>
     </div>
  )
}

export default App;
