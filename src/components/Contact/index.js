import React from 'react'
import NumberFormat from 'react-number-format';
import classes from './classes.module.css'
import Animation from './Animation'
import point from '../../point.js'
import shortid from 'shortid'

function App() {
  const[username, setUsername]=React.useState('')
  const[number, setNumber]=React.useState('')
  const [todo, setTodo] = React.useState([])
  const [isSend, setIsSend] = React.useState(false)

  React.useEffect(() => {
  fetch(`${point}/list`)
      .then((response) => response.json())
      .then((data) => setTodo(data)) }, [])

     const handleClick = (e)=>{
      if (username.length>=5 && number) {
        e.preventDefault()
        const newTodo = { number, username }
        setTodo([...todo, { id: shortid.generate(), ...newTodo }])
        console.log(username, number, todo);
        setNumber('')
        setUsername('')
        fetch(`${point}/addlist`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(newTodo),
        })
          .then((response) => {
            if (!response.ok) console.log('Ошибка cоздания')
          })
          setIsSend(true) 
      }
      
     }
      const modul = ()=>{
        setIsSend(false)
      }
  return (
   <div className={classes.contact}>
    <div className={classes.contactWrap}>
    <span className={classes.contacth2}>Заявка</span>
    <div className={classes.contactContainer}>
        <div className={classes.name}>
      <div className='fa fa-user'></div>
        <input 
        onChange={(event) => setUsername(event.target.value)}
        value={username}
         placeholder="Имя" 
         type="text" 
         />
        </div>
         <div className={classes.name}>
         <div className='fa fa-phone' />
         <NumberFormat onChange={(event) => setNumber(event.target.value)}
        value={number} format="+996 (###) ######" placeholder='+996 (###) ######'  mask="_"/>
        </div>
        <button onClick={handleClick}>Send</button>
      {isSend ?
        <div className={classes.modal} >
       <h2 className={classes.modalh2}>Спасибо</h2>
       <div className={classes.modaltext}>Мы обязательно позвоним по оставленному вами номеру</div>
       <div className={classes.animation}>
      <Animation/>
       </div>
       <button onClick={modul} className={classes.modalB}>Вернуться к форме заявки</button>
        </div> : null}
    </div>
   </div>
   </div>
  );
}

export default App;
