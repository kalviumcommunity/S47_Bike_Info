import './App.css'
import Bikeinfo from './components/Bikeinfo'
import { Routes, Route } from 'react-router-dom' 
import InsertData from './components/InsertData'
import UpdateData from './components/UpdateData'
import Login from './components/Login'
function App() {
  
  return (
    <>
        <Routes>
          <Route path='/Data' element={<Bikeinfo/>}></Route>
          <Route path='/InsertData' element={<InsertData/>}></Route>
          <Route path='/UpdateData/:id' element={<UpdateData/>}></Route>
          <Route path='/' element={<Login/>}></Route>
        </Routes>
        
   
    </>
  )
}

export default App
