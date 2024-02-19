import React from 'react'
import styles from '../CSS/Insert.module.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'
// import { useEffect } from 'react'
const Login = () => {
  const [name,setName]=useState('')
  const [userName,setUserName]=useState('')
  const [email,setEmail]=useState('')

   const navigate = useNavigate()
   const HandelLogin=(e)=>{
    e.preventDefault()
    console.log("swdefv");
    axios.post('http://localhost:4000/login')
    .then(res=>{
      document.cookie=`Token=${res.data}; expires=Thu, 01 Jan 9999 00:00:00 UTC; path=/;`;
      console.log(res.data)
      navigate('/Data') 
    }).catch(err=>console.log(err))
   }
   const setCookies=(key,value)=>{
    document.cookie = `${key}  =  ${value}`
}        
  return (
    <div className={styles.body}>
    <h1 className={styles.heading}>Login</h1>
    <form className={styles.form} onSubmit={(e)=>HandelLogin(e)}>
      <label htmlFor="Name">Name: </label>
      <input type="text" required onChange={(e)=>{setCookies('Name',e.target.value); setName(e.target.value)}}  />
      <br />
      <label htmlFor="UserName">User Name: </label>
      <input type="text" required onChange={(e)=>{setCookies('User_Name',e.target.value); setUserName(e.target.value)}}/>
      <br />
      <label htmlFor="Email">Email: </label>
      <input type='email' required onChange={(e)=>{setCookies('Email',e.target.value); setEmail(e.target.value)}}/>
      <br />
      <button type='submit'>Login</button>
    </form>

</div>
  )
}

export default Login
