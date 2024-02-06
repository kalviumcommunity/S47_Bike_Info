import React from 'react'
import { useEffect,useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
const Bikeinfo = () => {
    // const Data = props.Data
    const [Data,setData] = useState([])
    
    useEffect(()=>{
      fetch('http://localhost:4000/DataBase')
      .then(data=>data.json())
      .then(res =>{
        setData(res)
        // console.log(res)
      })
    },[])

    const HandelDelete=(id)=>{
      // console.log("Delete button clicked",id);
      axios.delete(`http://localhost:4000/DeleteData/${id}`)
      .then(res=>{
        console.log(res)
        window.location.reload(true)
      }).catch(err=>console.log(err))
    }

  return (
    <div className='body'>
      <div className='nav'>
        <h1 className='title'>BIKE-INFO</h1>
      </div>
      <h1 className='insert'>For Insert more Data <Link to='/InsertData' state={{color:'blue'}}>Click Here!</Link></h1>
      {Data && Data.map((Data,index)=>{
        return(
        <div key={index} className='box'>
          <img src={Data.img} alt="image" className='image'/>
            <div className='value'>
            <h3>Company:{Data.company}</h3>
            <h3>Model: {Data.model}</h3>
            <p>Price: {Data.price}</p>
            <p>Mileage: {Data.mileage}</p>
          </div>
          <div className='btn'>
            <Link to={`/UpdateData/${Data._id}`}><button>Update</button></Link>
            <button onClick={()=>HandelDelete(Data._id)}>Delete</button>
          </div>
        </div>
        )
      })}
      
    </div>
  )
}

export default Bikeinfo
