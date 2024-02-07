import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from '../CSS/Insert.module.css'
import {useState,useEffect} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
const UpdateData = () => {
    const {id} = useParams()
    const [company,setCompany] = useState('')
    const [model,setModel] = useState('')
    const [price,setPrice] = useState('')
    const [mileage,setMileage] = useState('')
    const [img,setImage] = useState('')
    const Navigate = useNavigate()

    useEffect(()=>{
        axios.get('http://localhost:4000/GetData/'+id)
        .then(res=>{
            // console.log(res)
            setCompany(res.data.company)
            setModel(res.data.model)
            setPrice(res.data.price)
            setMileage(res.data.mileage)
            setImage(res.data.img)
        }).catch(err=>console.log(err))
    },[id])

    const Update=(e)=>{
        e.preventDefault()
        console.log(company,model,price,mileage,img)
        axios.put(`http://localhost:4000/UpdateData/${id}`,{company,model,price,mileage,img})
        .then(res=>{
            console.log(res)
            Navigate('/')
        }).catch(err=>console.log(err))
    }

  return (
    <div className={styles.body}>
        <h1 className={styles.heading}>Update Data</h1>
        <form className={styles.form} onSubmit={Update}>
          <label htmlFor="company">Company: </label>
          <input type="text" id='company' name='company' value={company} onChange={(e)=>setCompany(e.target.value)}/>
          <br />
          <label htmlFor="model">Model: </label>
          <input type="text" id='model' name='model' value={model} onChange={(e)=>setModel(e.target.value)}/>
          <br />
          <label htmlFor="price">Price: </label>
          <input type="text" id='price' name='price' value={price} onChange={(e)=>setPrice(e.target.value)}/>
          <br />
          <label htmlFor="mileage">Mileage: </label>
          <input type="text" id='mileage' name='mileage' value={mileage} onChange={(e)=>setMileage(e.target.value)}/>
          <br />
          <label htmlFor="img">Image URL: </label>
          <input type="text" id='img' name='img' value={img} onChange={(e)=>setImage(e.target.value)} />
          <br />
          <br />
          <button >Update</button>
          <Link to='/'>
            <button>Cancel</button>
          </Link>
        </form>
    </div>
  )
}

export default UpdateData
