import React from 'react'
import styles from '../CSS/Insert.module.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Link } from 'react-router-dom'
const InsertData = () => {
  const [company,setCompany] = useState('')
  const [model,setModel] = useState('')
  const [price,setPrice] = useState('')
  const [mileage,setMileage] = useState('')
  const [img,setImage] = useState('')
  const [error,setError] = useState()
  const Navigate = useNavigate()
  const Submit = (e)=>{
    e.preventDefault()
    axios.post('http://localhost:4000/InsertData',{company,model,price,mileage,img})
    .then(res=>{
      console.log(res.data.message)
      if(res.data.message){
        setError("Please Enter Valid URL")
      }else{
        Navigate('/Data')
      }
    }).catch(err=>{
      console.log(err)
    })
  }

  return (
    <div className={styles.body}>
        <h1 className={styles.heading}>Insert Data</h1>
        <form className={styles.form} onSubmit={Submit}>
          <label htmlFor="company">Company: </label>
          <input type="text" id='company' required  name='company' onChange={(e)=>setCompany(e.target.value)}/>
          <br />
          <label htmlFor="model">Model: </label>
          <input type="text" id='model'required name='model' onChange={(e)=>setModel(e.target.value)}/>
          <br />
          <label htmlFor="price">Price: </label>
          <input type="text" id='price' required name='price' onChange={(e)=>setPrice(e.target.value)}/>
          <br />
          <label htmlFor="mileage">Mileage: </label>
          <input type="text" id='mileage' required name='mileage' onChange={(e)=>setMileage(e.target.value)}/>
          <br />
          <label htmlFor="img">Image URL: </label>
          <input type="text" id='img' required name='img' onChange={(e)=>setImage(e.target.value)} />
          <br />
          {error && <p className={styles.err}>{error}</p>}
          <br />
          <button type='submit'>Submit</button>
          <Link to='/Data'>
            <button>Cancel</button>
          </Link>
        </form>

    </div>
  )
}

export default InsertData
