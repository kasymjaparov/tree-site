import React from 'react';
import classes from './classes.module.css'
import user from '../../img/user.svg'
import subjectI from '../../img/subject.png'
import shortid from 'shortid'
import Animation from './Animation'

function App() {
  const[username, setUsername]=React.useState('')
  const[subject, setSubjectI]=React.useState('')
  const[message, setMessage]=React.useState('')
  const [todo, setTodo] = React.useState([])
  const [titleIsValid, setTitleIsValid] = React.useState(false)
  const [textIsValid, setTextIsValid] = React.useState(false)
  const [usernameIsValid, setUsernameIsValid] = React.useState(false)
  const [isSend, setIsSend] = React.useState(false)

  React.useEffect(() => {
    setTitleIsValid(subject.length >= 10)
  }, [subject.length, titleIsValid])
  React.useEffect(() => {
    setUsernameIsValid(username.length > 4)
  }, [username.length, usernameIsValid])
  React.useEffect(() => {
    setTextIsValid(message.length > 50)
  }, [message.length, textIsValid])
  React.useEffect(() => {
  fetch(`fef/list`)
      .then((response) => response.json())
      .then((data) => setTodo(data)) }, [])
     
     const handleClick = (e)=>{
      if (message && subject && username && message.length>=50 && username.length>=4 && subject.length>=10) {
        e.preventDefault()
        const newTodo = { subject, message, username }
        setTodo([...todo, { id: shortid.generate(), ...newTodo }])
        console.log(username, subject, message, todo);
        setSubjectI('')
        setMessage('')
        setUsername('')
        fetch(`fwefw/addlist`, {
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
    <span className={classes.contacth2}>Contact me</span>
    <div className={classes.contactContainer}>
        <div className={classes.name}>
        <img src={user} alt="person"/>
        <input 
        onChange={(event) => setUsername(event.target.value)}
        value={username}
         placeholder="Name" 
         type="text" 
         />
        </div>
        <div className={classes.name}>
        <img src={subjectI} alt="subject"/>
        <input onChange={(event) => setSubjectI(event.target.value)}
        value={subject} placeholder="Subject" type="text" />
        </div>
        <textarea onChange={(event) => setMessage(event.target.value)}
        value={message} placeholder="Message"></textarea>
        <br/>
        <button onClick={handleClick}>Send</button>
        {!usernameIsValid && <div className={classes.warning}>*Name must be more than 4 letter </div>}
      {!titleIsValid && <div className={classes.warning}>*Subject must be more than 10 letter</div>}
      {!textIsValid && <div className={classes.warning}>*Message must be more than 50 letter</div>}
      {isSend ?
        <div className={classes.modal} >
       <h2 className={classes.modalh2}>Thank you</h2>
       <div className={classes.modaltext}>We will answer your request</div>
       <div className={classes.animation}>
      rerrrrrrrrrrrrr
       </div>
       <button onClick={modul} className={classes.modalB}>Back to form</button>
        </div> : null}
    </div>
   </div>
   </div>
  );
}

export default App;
