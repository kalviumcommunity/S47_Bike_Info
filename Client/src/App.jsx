import './App.css'
import Bikeinfo from './components/Bikeinfo'
function App() {
    const Data =  {   
      "id":0,
      "company" : "Royal Enfiled",
      "model" : "Classic 350",
      "price" : "Rs 1.93 - 2.24 lakh",
      "mileage" : "37.77 Kmpl",
      "engine" : "349 CC",
      "fuel_capacity" : "13 litre",
      "weight" : "195 Kg",
      "img":"https://english.cdn.zeenews.com/sites/default/files/styles/zm_700x400/public/2021/12/20/997676-royal-enfield-classic-350.jpg?im=Resize=(400,229)"
    }
  return (
    <>
      <div className='nav'>
        <h1 className='title'>BIKE-INFO</h1>
      </div>
      <Bikeinfo Data = {Data}/>
    </>
  )
}

export default App
