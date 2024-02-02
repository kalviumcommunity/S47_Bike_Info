import React from 'react'

const Bikeinfo = (props) => {
    const Data = props.Data
  return (
    <div className='box'>
      <img src={Data.img} alt="image" />
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
}

export default Bikeinfo
