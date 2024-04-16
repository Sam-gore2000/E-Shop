import { useState } from 'react'
import {BrowserRouter as Router,Route,Routes,} from "react-router-dom";
import './App.css'
import Home from './pages/Home/Home';
import Order from './pages/Order/Order';
import Cart from './pages/Cart/Cart';
import Nopage from './pages/Nopage/Nopage'
import Dashboard from './pages/Admin/Dashboard/Dashboard';
import MyState from './context/Data/MyState';
import Login from './pages/Registration/Login';
import Signup from './pages/Registration/SignUp';
import ProductInfo from './pages/ProductInfo/ProductInfo';
import AddProduct from './pages/Admin/page/AddProduct';
import UpdateProduct from './pages/Admin/page/UpdateProduct';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {


  return (
    <>
    <MyState>
       <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Order" element={<Order/>} />
        <Route path="/Cart" element={<Cart/>} />
        <Route path="/*" element={<Nopage/>} />
        <Route path="Dashboard" element={<Dashboard/>} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/SignUP" element={<Signup/>} />
        <Route path="/productInfo/:id" element={<ProductInfo />} />
        <Route path="/AddProduct" element={<AddProduct/>} />
        <Route path="/UpdateProduct" element={<UpdateProduct/>} />
        
    



        



        
       
      </Routes>
      <ToastContainer/>
    </Router>
    </MyState>
    
    </>
  )
}

export default App
