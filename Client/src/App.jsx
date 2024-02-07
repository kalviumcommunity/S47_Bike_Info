import './App.css'
import Bikeinfo from './components/Bikeinfo'
import { Routes, Route } from 'react-router-dom' 
import InsertData from './components/InsertData'
import UpdateData from './components/UpdateData'
function App() {
  
  return (
    <>
        <Routes>
          <Route path='/' element={<Bikeinfo/>}></Route>
          <Route path='/InsertData' element={<InsertData/>}></Route>
          <Route path='/UpdateData/:id' element={<UpdateData/>}></Route>
        </Routes>
        
   
    </>
  )
}

export default App
