import React from 'react'
import HomePage from './Components/HomePage'
import CartPage from './Components/CartPage'
import { Route, Routes } from 'react-router'

function App() {
  return(
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
       
    </Routes>
  )
}

export default App
