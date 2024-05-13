import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Sidebar from "./Components/Sidebar.jsx"
import SignIn from "./Components/SignIn.jsx"
import Login from "./Components/Login.jsx"
import './App.css'
import './HomePage.css'
import './assets/css/login.css'
import './assets/css/signin.css'

export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Sidebar/>} ></Route>
        <Route path="/register" element={<SignIn/>} ></Route>
        <Route path="/login" element={<Login/>} ></Route>
      </Routes>
    </BrowserRouter>
  )
}


