import React from 'react'
import { useEffect,useState } from 'react'
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
      {Data.map((Data,index)=>{
        return(
        <div key={index} className='box'>
          <img src={Data.img} alt="image" className='image'/>
            <div className='value'>
            <h3>Company:{Data.company}</h3>
            <h3>Model: {Data.model}</h3>
            <p>Price: {Data.price}</p>
            <p>Mileage: {Data.mileage}</p>
            <p>Engine: {Data.engine}</p>
            <p>Fuel capacity: {Data.fuel_capacity}</p>
            <p>Weight: {Data.weight}</p>
          </div>
        </div>
        )
      })}
      
    </div>
  )
}

export default Bikeinfo
