import { useState } from 'react'
import {BrowserRouter as Router,Route,Routes,} from "react-router-dom";
import './App.css'
import Home from './pages/Home/Home';
import Order from './pages/Order/Order';
import Cart from './pages/Cart/Cart';
import Nopage from './pages/Nopage/Nopage'
import Dashboard from './pages/Admin/Dashboard/Dashboard';
import MyState from './context/Data/MyState';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <MyState>
       <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Order" element={<Order/>} />
        <Route path="/Cart" element={<Cart/>} />
        <Route path="/Nopage" element={<Nopage/>} />
        <Route path="Dashboard" element={<Dashboard/>} />


        
       
      </Routes>
    </Router>
    </MyState>
    </>
  )
}

export default App
