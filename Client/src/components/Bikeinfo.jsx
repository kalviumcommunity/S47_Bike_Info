import React from 'react'
import { useEffect,useState } from 'react'
import { Link,useNavigate} from 'react-router-dom'
import axios from 'axios'
const Bikeinfo = () => {
    const [sort,setSort] = useState('All')
    const [Data,setData] = useState([])
    const name = (decodeURIComponent(document.cookie).split("; "))
    // const cook = document.cookie
    const navigate = useNavigate()
    useEffect(()=>{
      fetch('http://localhost:4000/DataBase')
      .then(data=>data.json())
      .then(res =>{
        setData(res)
        console.log(res)
        console.log(name)
        // console.log(cook)
      })
    },[])

    const HandelDelete=(id)=>{
      console.log("Delete button clicked",id);
      axios.delete(`http://localhost:4000/DeleteData/${id}`)
      .then(res=>{
        console.log(res)
        window.location.reload(true)
      }).catch(err=>console.log(err))
    }
    const handleSort=(e)=>{
      setSort(e.target.value)
    }
    const SortedData = (sort == "All")? Data : Data.filter(item => item.company == sort)
    const Logout=()=>{
      document.cookie = "Name=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      document.cookie = "Email=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      document.cookie = "User_Name=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      document.cookie = "Token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      navigate('/')
      window.location.reload(true)
    }
  return (
    <div className='body'>
      <div className='nav'>
        <h1 className='title'>BIKE-INFO</h1>
        <button onClick={Logout} className='logout'>Logout</button>
      </div>
      <h1 className='insert'>For Insert more Data <Link to='/InsertData' state={{color:'blue'}}>Click Here!</Link></h1>
      <select className='dropdown' onChange={handleSort}>
        <option value="All">All</option>
        <option value="Royal Enfiled">RE</option>
        <option value="Honda">Honda</option>
        <option value="Bajaj">Bajaj</option>

      </select>
      {SortedData && SortedData.map((Data,index)=>{
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
