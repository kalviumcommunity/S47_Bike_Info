import React from 'react'
import styles from '../CSS/Insert.module.css'
import { useNavigate } from 'react-router-dom'
const Login = () => {
   const navigate = useNavigate()
   const HandelLogin=()=>{
        navigate('/Data') 
   }
   const setCookies=(key,value)=>{
    document.cookie = `${key}  =  ${value}`
}        
  return (
    <div className={styles.body}>
    <h1 className={styles.heading}>Login</h1>
    <form className={styles.form} onSubmit={HandelLogin}>
      <label htmlFor="Name">Name: </label>
      <input type="text" required onChange={(e)=>setCookies('Name',e.target.value)}  />
      <br />
      <label htmlFor="UserName">User Name: </label>
      <input type="text" required onChange={(e)=>setCookies('User_Name',e.target.value)}/>
      <br />
      <label htmlFor="Email">Email: </label>
      <input type='email' required onChange={(e)=>setCookies('Email',e.target.value)}/>
      <br />
      <button type='submit'>Login</button>
    </form>

</div>
  )
}

export default Login
