import React from 'react'
import { useEffect,useState } from 'react'
import { Link } from 'react-router-dom'
const Bikeinfo = () => {
    // const Data = props.Data
    const [Data,setData] = useState([])
    
    useEffect(()=>{
      fetch('http://localhost:4000/DataBase')
      .then(data=>data.json())
      .then(res =>setData(res))
    })
  return (
    <div className='body'>
      <div className='nav'>
        <h1 className='title'>BIKE-INFO</h1>
      </div>
      <h1 className='insert'>For Insert more Data <Link to='/InsertData' state={{color:'blue'}}>Click Here!</Link></h1>
      {Data.map((Data,index)=>{
        return(
        <div key={index} className='box'>
          <img src={Data.img} alt="image" className='image'/>
            <div className='value'>
            <h3>Company:{Data.company}</h3>
            <h3>Model: {Data.model}</h3>
            <p>Price: {Data.price}</p>
            <p>Mileage: {Data.mileage}</p>
           
          </div>
        </div>
        )
      })}
      
    </div>
  )
}

export default Bikeinfo
