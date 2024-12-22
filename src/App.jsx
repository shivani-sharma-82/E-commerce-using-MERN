import { useState } from 'react'

import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Collection from './pages/Collection'
import About from './pages/About'
import Contact from './pages/Contact'
import Login from './pages/Login'
import PlaceOrder from './pages/PlaceOrder'
import Navbar from './components/Navbar'
import Orders from './pages/Orders'
import Product from './pages/Product'
import Cart from './pages/Cart'

function App() {
  return (
<div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
  <Navbar></Navbar>
  <Routes>
    <Route path='/' element={<Home></Home>}></Route>
    <Route path='/collection>' element={<Collection></Collection>}></Route>
    <Route path='/about' element={<About></About>}></Route>
    <Route path='/contact' element={<Contact></Contact>}></Route>
    <Route path='/product/:productId' element={<Product></Product>}></Route>
    <Route path='/cart' element={<Cart></Cart>}></Route>
    <Route path='/login' element={<Login></Login>}></Route>
    <Route path='/placeOrder' element={<PlaceOrder></PlaceOrder>}></Route>
    <Route path='/orders' element={<Orders></Orders>}></Route>
  </Routes>
</div>
  )
}

export default App