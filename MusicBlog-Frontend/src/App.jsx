import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Sidebar from "./Components/Sidebar.jsx"
import './App.css'
import './HomePage.css'

export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Sidebar/>} ></Route>
      </Routes>
    </BrowserRouter>
  )
}


