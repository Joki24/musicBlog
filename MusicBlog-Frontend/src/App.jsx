import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './Components/HomePage.jsx'
import SignIn from "./Components/SignIn.jsx"
import Login from "./Components/Login.jsx"
import './App.css'
import './assets/css/login.css'
import './assets/css/signin.css'
import './assets/css/homePage.css'
import Passwordreset from './Components/Passwordreset.jsx'
import Article from './Components/Article.jsx'
import './assets/css/article.css'


export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>} ></Route>
        <Route path="/register" element={<SignIn/>} ></Route>
        <Route path="/login" element={<Login/>} ></Route>
        <Route path="/passwordreset" element={<Passwordreset/>} ></Route>
        <Route path="/article/2022/3/14/thom-yorke-surprise-releases-new-song-517" element={<Article/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}


